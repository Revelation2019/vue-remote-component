import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const RemoteBaseComponent = (props: any) => {

  const { type } = props;

  const [Comp, setComponent] = useState<React.FC | null>(null);

  const importComponent = useCallback(() => {
    return axios.get(`http://127.0.0.1:8888/${type}.js`).then(res => res.data);
  }, [type])

  const loadComp = useCallback(async () => {
    // new Function(`${await importComponent()}`)();
    window.eval(`${await importComponent()}`)
    const { default: component } = (window as any).MyComponent;
    setComponent(() => component);
  }, [importComponent, setComponent])

  useEffect(() => {
    loadComp();
  }, [loadComp]);

  if (Comp) {
    return <Comp {...props}/>
  }

  return null;
}

// class RemoteBaseComponent extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       component: null,
//     };
//   }

//   importComponent(): any {
//     return axios.get(`http://127.0.0.1:8888/${this.props.type}.js`).then(res => res.data);
//   }

//   async componentDidMount() {
//     const aaaa = new Function(`${await this.importComponent()}`)();
//     const { default: component } = (window as any).MyComponent;
    
//     this.setState({
//       component: component
//     });
//   }
  
//   render() {
//     const C = this.state.component;

//     return C
//       ? <C {...this.props} />
//       : null;
//   }
// }

export default RemoteBaseComponent;

