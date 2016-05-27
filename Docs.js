import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

class DocsComponent extends Component {
  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  _removeDoc(doc) {
    return () => this.props.onDocRemove(doc);
  }

  renderDoc(doc) {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._removeDoc(doc)}>
          <Text style={styles.removeBtn}>Remove</Text>
        </TouchableHighlight>
        <View style={styles.rightContainer}>
          <Text style={styles.doc}>{doc}</Text>
        </View>
      </View>
    );
  }

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.docs);

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderDoc.bind(this)}
        enableEmptySections={true}
        style={styles.listView}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  doc: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  removeBtn: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default DocsComponent;