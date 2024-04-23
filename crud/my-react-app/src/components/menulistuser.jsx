import React from "react";
import {Menu} from 'antd'; 
import { WechatOutlined,
    InfoCircleOutlined,
        SettingOutlined, 
        ScheduleOutlined,
        LinkOutlined,
        MailOutlined  } from '@ant-design/icons'
import '../css/menubar.css'
import { Link} from 'react-router-dom';


 
const MenuListUser= ({darkTheme}) => {
return(
   <Menu mode="inline" className="menu-bar" theme={darkTheme? 'dark': 'light'}  >
<Menu.Item key="home" icon={<WechatOutlined />}>
<Link to="/chat">Chat</Link>
</Menu.Item> 
<Menu.Item key="home" icon={<InfoCircleOutlined />}>
<Link to="/latestthreat">Lastest updates</Link>
</Menu.Item>
<Menu.SubMenu key="subtasks" icon= {<ScheduleOutlined />} title="Checker">
<Menu.Item key="tadarkThemesk-1" icon={<MailOutlined/>}><Link to="/email">Email</Link></Menu.Item>
<Menu.Item key="task-2" icon={<LinkOutlined />}><Link to="/url">URL</Link></Menu.Item>
</Menu.SubMenu>
<Menu.Item key="home" icon={<SettingOutlined/>}>
<Link to="/user_settings">Profile</Link>
</Menu.Item>
   </Menu>
);

};

export default MenuListUser;