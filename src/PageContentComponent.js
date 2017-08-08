import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ClearFix from 'material-ui/internal/ClearFix';
import AutoComplete from 'material-ui/AutoComplete';

class SearchComponent extends React.Component {
  constructor() {
    super();

    this.filter = this.filter.bind(this);
  }

  filter(text, key) {
    return key.toLowerCase().indexOf(text.toLowerCase()) >= 0;
  }

  searchItems = [
    "Republic Fleet 100MN Afterburner Blueprint",
    "Republic Fleet 10MN Afterburner Blueprint",
    "Republic Fleet 1MN Afterburner Blueprint",
    "Republic Fleet 500MN Microwarpdrive Blueprint",
    "Republic Fleet 50MN Microwarpdrive Blueprint",
    "Republic Fleet 5MN Microwarpdrive Blueprint",
    "Republic Fleet Adaptive Nano Plating Blueprint"
  ]
  render() { return <AutoComplete dataSource={this.searchItems} filter={this.filter} /> }
}

export default class PageContentComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ClearFix style={{margin:'24px'}}>
        <Card>
          <CardHeader
            title="Select Blueprint"
            children={<SearchComponent/>}
          />

          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>

          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </ClearFix>
    )
  }
};