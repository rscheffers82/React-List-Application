import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { startToggleTodo } from "actions";

// const Todo = ({ id, text, completed, createdAt, completedAt, dispatch }) => {

//   const renderDate = () => {
//     let message = "Created at: ";
//     let timestamp = createdAt;
//     const format = "Do MMMM YYYY @ k:mm";

//     if (completed) {
//       message = "Completed at: ";
//       timestamp = completedAt;
//     }

//     return message + moment.unix(timestamp).format(format);
//   };

//   return (
//     <div
//       className={completed ? "todo todo-completed" : "todo"}
//       onClick={() => dispatch(startToggleTodo(id, !completed))}
//     >
//       <div>
//         {completed ? (
//           <svg style={{ width: "15px", height: "15px" }} viewBox="0 0 24 24">
//             <path
//               fill="#000000"
//               d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
//             />
//           </svg>
//         ) : (
//           <svg style={{ width: "15px", height: "15px" }} viewBox="0 0 24 24">
//             <path
//               fill="#000000"
//               d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
//             />
//           </svg>
//         )}
//       </div>
//       <div>
//         <p>{text}</p>
//         <p className="todo__subtext">{renderDate()}</p>
//       </div>
//     </div>
//   );
// };


class Todo extends React.Component {

  renderDate = () => {
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;

    let message = "Created at: ";
    let timestamp = createdAt;
    const format = "Do MMMM YYYY @ k:mm";

    if (completed) {
      message = "Completed at: ";
      timestamp = completedAt;
    }

    return message + moment.unix(timestamp).format(format);
  };

  render() {
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    return (
      <div
        className={completed ? "todo todo-completed" : "todo"}
        onClick={() => dispatch(startToggleTodo(id, !completed))}
      >
        <div>
          {completed ? (
            <svg style={{ width: "15px", height: "15px" }} viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
              />
            </svg>
          ) : (
            <svg style={{ width: "15px", height: "15px" }} viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
              />
            </svg>
          )}
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{this.renderDate()}</p>
        </div>
      </div>
    );
  
  }

};

export default connect()(Todo);
