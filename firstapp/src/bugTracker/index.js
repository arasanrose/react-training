import { Fragment } from 'react';
import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bugActionCreators from "./actions";

const BugTracker = ({ bugs, projects, toggle, remove, removeClosed, addNew }) => (
  <Fragment>
    <h1>Bug Tracker</h1>
    <hr />
    <BugStats bugs={bugs} />
    <BugSort />
    <BugEdit projects={projects} addNew={addNew} />
    <BugList {...{ bugs, toggle, remove, removeClosed }} />
  </Fragment>
);

function mapStateToProps(storeState){
  const bugs =  storeState.bugState;
  const projects = storeState.projectState;
  return { bugs : bugs, projects: projects };
}
function mapDispatchToProps(dispatch){
  const bugActionDispatchers  = bindActionCreators(bugActionCreators, dispatch);
  return bugActionDispatchers;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(BugTracker);
