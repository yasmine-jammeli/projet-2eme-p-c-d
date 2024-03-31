#pip install crewai
#pip install duckduckgo-search
#pip install langchain_google_genai
#!pip install --q crewai
#!pip install --q -U duckduckgo-search
#!pip install --q langchain_google_genai

import os
from langchain_google_genai import ChatGoogleGenerativeAI
from crewai import Agent, Task, Crew, Process
# Set gemini pro as llm
llm = ChatGoogleGenerativeAI(model="gemini-pro",
                             verbose = True,
                             temperature = 0.6,
                             google_api_key="AIzaSyDbGYNDqpoqxxML3CteXAMUNMbAV8ucJI8")
llm
# Make sure to Install duckduckgo-search for this example:
#!pip install -U duckduckgo-search

from langchain.tools import DuckDuckGoSearchRun
search_tool = DuckDuckGoSearchRun()
# Define your agents with roles and goals
researcher = Agent(
  role=' security assistant that scrip the web',
  goal=' A security assistant plays a supportive role in ensuring the safety and security of an organization by providing solutions and detecting threats',
  backstory="""You work at a leading tech think tank.
  Your expertise lies in identifying emerging trends.
  You have a knack for dissecting complex data and presenting
  actionable insights.""",
  verbose=True,
  allow_delegation=False,
  llm = llm,  #using google gemini pro API
  tools=[
        search_tool
      ]
  # You can pass an optional llm attribute specifying what mode you wanna use.
  # It can be a local model through Ollama / LM Studio or a remote
  # model like OpenAI, Mistral, Antrophic of others (https://python.langchain.com/docs/integrations/llms/)
  #
  # Examples:
  # llm=ollama_llm # was defined above in the file
  # llm=ChatOpenAI(model_name="gpt-3.5", temperature=0.7)
)
writer = Agent(
  role='Tech Content Strategist',
  goal='Craft compelling content on tech advancements',
  backstory="""You are a renowned Content Strategist, known for
  your insightful and engaging articles.
  You transform complex concepts into compelling narratives.""",
  verbose=True,
  allow_delegation=False,
  llm = llm,  #using google gemini pro API
  tools=[]
)
# Create tasks for your agents
task1 = Task(
  description="""Conduct a comprehensive latest 10 security attak in 2024.
  Identify key trends, breakthrough technologies, and potential industry impacts.
  Your final answer MUST be a full security report""",
  agent=researcher
)
task2 = Task(
  description="""Using the insights provided, develop an engaging blog
  post that highlights the most significant security advancements.
  Your post should be informative yet accessible, catering to a tech-savvy audience.
  Make it sound cool, avoid complex words so it doesn't sound like AI.
  Your final answer MUST be the full blog post of at least 6 short paragraphs.""",
  agent=writer
)


# Instantiate your crew with a sequential process
crew = Crew(
  agents=[researcher, writer],
  tasks=[task1, task2],
  verbose=2, # You can set it to 1 or 2 to different logging levels
)
crew
# Get your crew to work!
result = crew.kickoff()
# Get your crew to work!
result = crew.kickoff()