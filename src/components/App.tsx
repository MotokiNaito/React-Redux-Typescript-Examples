import React from 'react';

interface AppProps {
  color?: string;
}

// export class App extends React.Component<AppProps> {
//   state = {};
//   render() {
//     return <div>{this.props.color}</div>;
//   }
// }

export const App = (props: AppProps): JSX.Element => {
  return <div>Heyyy</div>;
};
