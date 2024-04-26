import {
  DELETE_BLOGS,
  GET_BLOGS,
  ADD_BLOGS,
  UPDATE_BLOGS,
} from "../actions/types";

// Redux State
const initialState = {
  blogs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case DELETE_BLOGS:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
      };
    case ADD_BLOGS:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case UPDATE_BLOGS:
      const updates = state.blogs.map((blog) => {
        if (blog.id === action.payload.id) {
          return { ...blog, ...action.payload };
        }
        return blog;
      });
      return {
        ...state,
        blogs: updates,
      };
    default:
      return state;
  }
}
