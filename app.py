from flask import Flask, jsonify
from langchain_google_genai import ChatGoogleGenerativeAI
from crewai import Agent, Task, Crew, Process
from langchain_community.tools import DuckDuckGoSearchRun  # Import from langchain_community
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

llm = ChatGoogleGenerativeAI(model="gemini-pro",
                             verbose=True,
                             temperature=0.6,
                             google_api_key="AIzaSyDbGYNDqpoqxxML3CteXAMUNMbAV8ucJI8")

search_tool = DuckDuckGoSearchRun()
researcher = Agent(
    role=' security assistant that scrip the web',
    goal=' A security assistant plays a supportive role in ensuring the safety and security of an organization by providing solutions and detecting threats',
    backstory="""You work at a leading tech think tank.
  Your expertise lies in identifying emerging trends.
  You have a knack for dissecting complex data and presenting
  actionable insights.""",
    verbose=True,
    allow_delegation=False,
    llm=llm,  # using google gemini pro API
    tools=[
        search_tool
    ]
)
writer = Agent(
    role='Tech Content Strategist',
    goal='Craft compelling content on tech advancements',
    backstory="""You are a renowned Content Strategist, known for
  your insightful and engaging articles.
  You transform complex concepts into compelling narratives.""",
    verbose=True,
    allow_delegation=False,
    llm=llm,  # using google gemini pro API
    tools=[]
)
# Create tasks for your agents
task1 = Task(
    description="""Conduct a comprehensive latest 10 security attack in 2024.
  Identify key trends, breakthrough technologies, and potential industry impacts.
  Your final answer MUST be a full security report""",
    expected_output="",  # Placeholder for expected_output
    agent=researcher
)
task2 = Task(
    description="""Using the insights provided, develop an engaging blog
  post that highlights the most significant security advancements.
  Your post should be informative yet accessible, catering to a tech-savvy audience.
  Make it sound cool, avoid complex words so it doesn't sound like AI.
  Your final answer MUST be the full blog post of at least 6 short paragraphs.""",
    expected_output="",  # Placeholder for expected_output
    agent=writer
)
crew = Crew(
    agents=[researcher, writer],
    tasks=[task1, task2],
    verbose=2,  # You can set it to 1 or 2 to different logging levels
)
# Function to generate daily update
def generate_daily_update():
    result = crew.kickoff()  # Assuming `crew` is defined globally
    # You can process `result` to get the daily update message
    daily_update = "Your daily security update :"
    print(result)
    return daily_update

# Schedule the daily update task
scheduler = BackgroundScheduler()
scheduler.add_job(generate_daily_update, 'cron', hour=8)  # Run daily at midnight
scheduler.start()

# Endpoint to fetch the daily update
@app.route('/daily-update')
def get_daily_update():
    daily_update = generate_daily_update()
    return jsonify({'daily_update': daily_update})

if __name__ == '__main__':
    app.run(debug=True)
