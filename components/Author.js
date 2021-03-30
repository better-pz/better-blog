

import {Avatar,Divider} from 'antd'
export default function Author() {
    return (
        <div >
        <div> <Avatar size={100}  /></div>
        <div>
             
            <Divider>社交账号</Divider>
            <Avatar size={28}  className="account"  />
            <Avatar size={28}  className="account" />
            <Avatar size={28}   className="account"  />

        </div>
    </div>
    )
}
