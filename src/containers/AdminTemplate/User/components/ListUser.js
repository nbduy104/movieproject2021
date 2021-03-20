import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListUser(props) {
  const classes = useStyles();
  const [listChecked, setListChecked] = React.useState([-1]);
  const [checkAll, setCheckAll] = React.useState(false);

  const handleToggle = (value) => () => {
    let newChecked = [];
    if(value===list.length){
      if(!checkAll){
        newChecked = [...list.map((item,index)=>index)]
      }
      setCheckAll(!checkAll)
    }else{
      const newChecked = [...listChecked];
      let index = listChecked.findIndex(item=>item===value)
      console.log(index,value);
      if (index!==-1) {
        newChecked.splice(index, 1);
      } else {
        newChecked.push(value);
      }    
    }
    setListChecked([...newChecked])  
  };
  const list = [ {
    taiKhoan: "1111aaatrung",
    hoTen: "Hoang Van",
    email: "asddsadasdaw7@yahoo.com.vn",
    soDt: "0987145623",
    matKhau: "0123456",
    maLoaiNguoiDung: "KhachHang"
  },
  {
    taiKhoan: "1111aaatrung",
    hoTen: "Hoang Van",
    email: "asddsadasdaw7@yahoo.com.vn",
    soDt: "0987145623",
    matKhau: "0123456",
    maLoaiNguoiDung: "KhachHang"
  },{
    taiKhoan: "1111aaatrung",
    hoTen: "Hoang Van",
    email: "asddsadasdaw7@yahoo.com.vn",
    soDt: "0987145623",
    matKhau: "0123456",
    maLoaiNguoiDung: "KhachHang"
  },{
    taiKhoan: "1111aaatrung",
    hoTen: "Hoang Van",
    email: "asddsadasdaw7@yahoo.com.vn",
    soDt: "0987145623",
    matKhau: "0123456",
    maLoaiNguoiDung: "KhachHang"
  },{
    taiKhoan: "1111aaatrung",
    hoTen: "Hoang Van",
    email: "asddsadasdaw7@yahoo.com.vn",
    soDt: "0987145623",
    matKhau: "0123456",
    maLoaiNguoiDung: "KhachHang"
  },]
  const lengt = list.length;
  return (

    <List className={classes.root}>
      <ListItem key={lengt} role={undefined} dense button onClick={handleToggle(lengt)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checkAll}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': lengt }}
              />
            </ListItemIcon>
            <ListItemText id={lengt} primary={"Name"} />
            <ListItemText id={lengt} primary={"Email"}/>
            <ListItemText id={lengt} primary={"UserName"} />
            <ListItemText id={lengt} primary={"Email"} />
            <ListItemText id={lengt} primary={"Type"} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
      {list.map((item,index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem key={index} role={undefined} dense button onClick={handleToggle(index)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={listChecked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.hoTen} />
            <ListItemText id={labelId} primary={item.email} />
            <ListItemText id={labelId} primary={item.taiKhoan} />
            <ListItemText id={labelId} primary={item.soDt} />
            <ListItemText id={labelId} primary={item.maLoaiNguoiDung} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
