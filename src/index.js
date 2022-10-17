import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from './components/Statistics/Statistics.jsx';
import { Friends } from './components/Friends/Friends';
import { Transaction } from 'components/Transaction/Transaction';
import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';
import transaction from './assets/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics props={data} />
    <Friends props={friends} />
    <Transaction props={transaction} />
  </React.StrictMode>
);
