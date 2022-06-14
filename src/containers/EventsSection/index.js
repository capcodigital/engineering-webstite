import React from 'react';
import ContentComponent from '../../components/ContentComponent';
import { eventData } from '../../data/data';

function EventSection({bgColor}) {
  return (
    <div style={{ backgroundColor: `${bgColor}`, color: '#000', height: 'auto', display: 'flex', paddingBottom: '50px', paddingTop: '40px'}}>
        <div style={{ width: '450px', margin: 'auto 0 auto 24px', float: 'left', padding: '20px', flex: '1' }}>
            { eventData.map(({subtitle, content}) =>(
                <ContentComponent subtitle={subtitle} content={content} color={'black'} noBtn={true}/>
            ))}
        </div>
        <div style={{ width: '300px', height: '250px', backgroundColor: 'grey', marginRight: '24px', float: 'left', padding: '20px', flex: '1' }}>
            Image goes here
        </div>
    </div>
  )
}

export default EventSection;