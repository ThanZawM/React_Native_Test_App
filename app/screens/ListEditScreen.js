import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from '../components/forms';

import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().optional().label('Description'),
});

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Others',
    value: 9,
  },
];

function ListEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{title: '', price: '', category: null, description: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          width={130}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8} //10000.00 => 8 chars
        />
        <AppFormPicker
          width="50%"
          items={categories}
          name="category"
          placeholder="Category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline={true}
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {padding: 10},
});

export default ListEditScreen;
