const initialState = {
  shopCart: [],
  favourite: [],
  students: [],
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      let newStudentss = state.students;
      newStudentss.push(action.payload);
      console.log(state.students)
      return { ...state, students: newStudentss };

    case "DEL_STUDENT":
      const resStudentt = state.students.filter((val) => {
        return val.id !== action.payload.id;
      });

      return { ...state, students: resStudentt };
    case "ADD_PET":
      let newStudents = state.shopCart;
      newStudents.push(action.payload);
      console.log(newStudents);
      return { ...state, shopCart: newStudents };
    case "ADD_FAV":
      let newFav = state.favourite;
      newFav.push(action.payload);
      console.log(newFav);
      return { ...state, favourite: newFav };
      case "D_FAV":
        const resStudents = state.favourite.filter((val) => {
          return val.id !== action.payload.id;
        });
        return { ...state, favourite: resStudents };
    case "UPDATE_P":
      let newM = state.shopCart;
      state.da = action.payload;
      console.log(state.da);
      return { ...state, shopCart: newM };

    case "DEL_PET":
      const resStudent = state.shopCart.filter((val) => {
        return val.id !== action.payload.id;
      });
      return { ...state, shopCart: resStudent };
    case "DEL_MEVAALL":
      return { ...state, shopCart: [] };
    case "UPDATE_STUDENT":
      const studentIndex = state.shopCart.findIndex((val) => {
        return val.id === action.payload.id;
      });
      let newStudent = state.shopCart;
      newStudent[studentIndex] = action.payload;
      return { ...state, shopCart: newStudent };

    default:
      break;
  }
};

export default studentsReducer;
