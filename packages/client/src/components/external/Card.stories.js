import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';

storiesOf('External/Card', module).add('fullscreen', () => (
  <article id="webslides">
    <section style={{ border: '1px solid #333' }} className="aligncenter fullscreen slide current">
      <Card
        left={
          <img
            src="https://images.unsplash.com/photo-1479568768085-e578ac5738f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            mdxType="img"
          />
        }
        right={<div>Right Side</div>}
      />
    </section>
  </article>
));
