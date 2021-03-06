import React, {useState} from 'react';
import {FlatList} from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    Description: 'D1',
    image: require('../assets/images/jacket.jpeg'),
  },
  {
    id: 2,
    title: 'T2',
    Description: 'D2',
    image: require('../assets/images/jacket.jpeg'),
  },
  {
    id: 3,
    title: 'T3',
    Description: 'D3',
    image: require('../assets/images/jacket.jpeg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.Description}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: 'T3',
              Description: 'D3',
              image: require('../assets/images/jacket.jpeg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
