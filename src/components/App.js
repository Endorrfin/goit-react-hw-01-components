import React from "react";

// <<< TASK I >>>
import Profile from "./Profile/Profile";
import user from "./Profile/user";

// <<< TASK II >>>
import Stats from "./Stats/Stats";
import statistics from "./Stats/statistics.json";

// <<< TASK III >>>
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";

// <<< TASK IV >>>
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

const App = () => (
  <div>
    {/* TASK I */}
    {/* Делаем Profile настраиваемым, когда данные приходит извне, и динамически подставляются */}
    <Profile
      user={user}
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      infoStats={user.stats}
      // name="Jacques Gluke"
      // avatar="https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg"
      // alt="user-avatar"
      // tag={"@jgluke"}
      // location={"Ocho Rios, Jamaica"}
    />
    {/* TASK II */}
    <Stats title="Upload stats" statistics={statistics} />

    {/* TASK III */}
    <FriendList friends={friends} />

    {/* TASK IV */}
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
