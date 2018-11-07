import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';


// Create 6 new files for the six components.  use naming onvention.  setup imports,
//components, default export and import them into this file

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        {/* BrowserRouter expects 0 or 1 arguments.  The beauty of Switch below
        is that once it finds a matching Route it will stop looking for any other Route */}
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage} />
        </Switch>
    </div>            
</BrowserRouter>    
);

export default AppRouter;