// import React from "react"
// import styles from "./form.module.css"
// import { navigate } from "@reach/router"
//
// export default class Form extends React.Component {
//
//   render() {
//     return (
//         <form
//             className={styles.form}
//             method="post"
//             onSubmit={event => {
//               this.props.handleSubmit(event)
//               navigate(`/app/profile`)
//             }}
//         >
//           <p className={styles[`form__instructions`]}>
//             For this demo, please log in with the username <code>gatsby</code> and the
//             password <code>demo</code>.
//           </p>
//           <label className={styles[`form__label`]}>
//             Username
//             <input
//                 className={styles[`form__input`]}
//                 type="text"
//                 name="username"
//                 onChange={this.props.handleUpdate}
//             />
//           </label>
//           <label className={styles[`form__label`]}>
//             Password
//             <input
//                 className={styles[`form__input`]}
//                 type="password"
//                 name="password"
//                 onChange={this.props.handleUpdate}
//             />
//           </label>
//           {this.props.displayLogButton ? <input className={styles[`form__button`]} type="submit" value="Log In" /> : <div>Spinner</div>}
//         </form>
//     )
//   }
// }
//
