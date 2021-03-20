import React,{useState,useEffect} from 'react';
import { connect } from "react-redux";
import ListUser from './components/ListUser';
import { actGetAllUser } from "./modules/action";


const UserAdmin = (props) => {
    const [state, setstate] = useState({
        listUser: [],
      });
    return (
        <div>
            <ListUser listUser={state.listUser}/>
        </div>
    );
}
const mapStateToProps = (state) => ({
    listUser: state.adminUserReducer.data,
  });
export default connect(mapStateToProps)(UserAdmin);
