import React from "react";
import {Menu} from 'antd'; 
import { DatabaseOutlined , 
        ImportOutlined ,
        AreaChartOutlined,
        SettingOutlined, 
        BarsOutlined } from '@ant-design/icons'
import '../css/menubar.css'
import { Link} from 'react-router-dom';


 
const MenuListAdmin= ({darkTheme}) => {
return(
   <Menu mode="inline" className="menu-bar" theme={darkTheme? 'dark': 'light'}  >
<Menu.Item key="home" icon={<ImportOutlined />}>
<Link to="/import">Import users</Link>
</Menu.Item> 
<Menu.Item key="home" icon={<DatabaseOutlined />}>
<Link to="/database">Database</Link>
</Menu.Item>
<Menu.Item key="home" icon={<AreaChartOutlined/>}>
<Link to="/dashboard">Dashboard</Link>
</Menu.Item>
<Menu.Item key="home" icon={<SettingOutlined/>}>
<Link to="/admin_settings">Settings</Link>
</Menu.Item>
   </Menu>
);

};

export default MenuListAdmin;