import React from 'react';
import { Row, Col, Card } from 'antd';

const Content = () => {
  const items = [
    { title: 'Card 1', content: 'This is card 1' },
    { title: 'Card 2', content: 'This is card 2' },
    { title: 'Card 3', content: 'This is card 3' },
    { title: 'Card 4', content: 'This is card 4' },
  ];

  return (
      <>
      <div style={{ padding: '20px' }} className="container">
      <Row gutter={[16, 16]} style={{ marginTop: '130px', justifyContent: 'center', alignItems: 'center' }}>
      {items.map((item, index) => (
          <Col 
          key={index} 
          xs={12}  // 2 cards per row on mobile
          sm={12}  // still 2 per row on small tablets
          md={6}   // 4 per row on medium+
          lg={6} 
          xl={4}
          >
          <Card 
            title={item.title} 
            bordered={false} 
            style={{ textAlign: 'center' }}
          >
            {item.content}
          </Card>
        </Col>
      ))}
    </Row>


 <Row gutter={[16, 16]} style={{ marginTop: '20px' , justifyContent: 'center', alignItems: 'center'}}>
      {items.map((item, index) => (
          <Col 
          key={index} 
          xs={12}  // 2 cards per row on mobile
          sm={12}  // still 2 per row on small tablets
          md={6}   // 4 per row on medium+
          lg={6} 
          xl={4}
          >
          <Card 
            title={item.title} 
            bordered={false} 
            style={{ textAlign: 'center' }}
          >
            {item.content}
          </Card>
        </Col>
      ))}
    </Row>
    </div>
            </>
  );
};

export default Content;
