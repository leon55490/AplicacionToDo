import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  tittle: {
    fontSize: 20,
    color: '#6f6f6f',
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f',
  },
  textDone: {
    fontSize: 16,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },
  whiteText: {
    fontSize: 16,
    color: '#fff',
  },
  container: {
    width: '100%',
    padding: 20,
  },
  textInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 10,
    paddingLeft: 15,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5897fb',
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.25,
  },
  scrollContainer: {
    marginTop: 20,
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: '#6f6f6f',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.25,
  },
});

export default styles;
