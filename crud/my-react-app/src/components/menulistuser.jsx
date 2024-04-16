import React from "react";
import {Menu} from 'antd'; 
import { HomeOutlined, 
        AppstoreOutlined,
        AreaChartOutlined,
        SettingOutlined, 
        BarsOutlined } from '@ant-design/icons'
import '../css/menubar.css'

 
const MenuListUser= ({darkTheme}) => {
return(
   <Menu mode="inline" className="menu-bar" theme={darkTheme? 'dark': 'light'}  >
<Menu.Item key="home" icon={<AppstoreOutlined/>}>
    Home
</Menu.Item> 
<Menu.Item key="home" icon={<AreaChartOutlined/>}>
    Activity
</Menu.Item>
<Menu.Item key="home" icon={<HomeOutlined/>}>
    Progress
</Menu.Item>
<Menu.SubMenu key="subtasks" icon= {<BarsOutlined/>} title="Tasks">
<Menu.Item key="tadarkThemesk-1">Task 1</Menu.Item>
<Menu.Item key="task-2">Task 2</Menu.Item>
<Menu.Item key="task-3">Task 3</Menu.Item>
</Menu.SubMenu>
<Menu.Item key="home" icon={<SettingOutlined/>}>
    Settings
</Menu.Item>
   </Menu>
);

};

export default MenuListUser;