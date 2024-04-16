import React, { PureComponent } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import '../css/dashboard.css'

function Dashboard(){
    
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const getIntroOfPage = (label) => {
        if (label === 'Page A') {
          return "Page A is about men's clothing";
        }
        if (label === 'Page B') {
          return "Page B is about women's dress";
        }
        if (label === 'Page C') {
          return "Page C is about women's bag";
        }
        if (label === 'Page D') {
          return 'Page D is about household goods';
        }
        if (label === 'Page E') {
          return 'Page E is about food';
        }
        if (label === 'Page F') {
          return 'Page F is about baby food';
        }
        return '';
      };      
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
              <p className="intro">{getIntroOfPage(label)}</p>
              <p className="desc">Anything you want can be displayed here.</p>
            </div>
          );
        }
      
        return null;
      };
    
    return (
        
        <main className='main_container'>
            <div className='main_title'>
                <h3>DASHBOARD</h3>
            </div>
    
            <div className='main_cards'>
                <div className='box'>
                    <div className='card_inner'>
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className='card-icon'/>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='box'>
                    <div className='card_inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card-icon'/>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='box'>
                    <div className='card_inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card-icon'/>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='box'>
                    <div className='card_inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card-icon'/>
                    </div>
                    <h1>42</h1>
                </div>
            </div>
    
            <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="pv" barSize={20} fill="#8894d8" />
        </BarChart>
      </ResponsiveContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
    
            </div>
        </main>
      )
    }

export default Dashboard;
