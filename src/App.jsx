import React from 'react';
import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from './components/Statistics/Statistics.jsx';
import { Friends } from './components/Friends/Friends';
import { Transaction } from 'components/Transaction/Transaction';
import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';
import transaction from './assets/transactions.json';

export const App = () => {
  return (
    <>
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
    </>
  );
};
