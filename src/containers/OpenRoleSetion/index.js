import React from 'react';
import ContentComponent from '../../components/ContentComponent';
import { roleData } from '../../data/data';

function OpenRoleSetion({bgColor}) {
  return (
    <div style={{ backgroundColor: `${bgColor}`, color: '#fff', height: 'auto', display: 'flex', paddingBottom: '70px'}}>
        <div style={{ width: '300px', height: '250px', backgroundColor: 'grey', marginLeft: '24px', float: 'left', padding: '20px', flex: '1' }}>
            Image goes here
        </div>
        <div style={{ width: '450px', marginLeft: '24px', float: 'left', padding: '20px', flex: '1' }}>
            { roleData.map(({subtitle, content}) =>(
                <ContentComponent subtitle={subtitle} content={content}/>
            ))}
        </div>
    </div>
  )
}

export default OpenRoleSetion