import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Search from "./componentes/Search";
import Botao from "./componentes/Botao";
import Highcharts from "highcharts-react-official";

import HighchartsReact from "highcharts-react-official";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";
import "./styles/styles.css";
import './App.css';



const ResponsiveGridLayout = WidthProvider(Responsive);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

var valores = [
  [1220832000000, 22.56],
  [1220918400000, 21.67],
  [1221004800000, 21.66],
  [1221091200000, 21.81],
  [1221177600000, 21.28],
  [1221436800000, 20.05],
  [1221523200000, 19.98],
 
];

var config = {
  series: [
    {
      data: valores,
    }
  ]
};

function Header() {
  return (

    <header className="window-header">
      <div className="logo-container">
        <div className="app-logo">
          <span className="app-name">Widget</span>
        </div>
      </div>
    </header>

  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.conRef = React.createRef();

    this.chartRefs = [];

    this.setChartRef = (ref) => {
      this.chartRefs.push(ref);
    };
  }

  render() {
    const gridItems = [
      { id: 1, name: "Item One" }

    ];
    const layout = [
      { i: "1", x: 0, y: 3, w: 50, h: 2, minW: 2, minH: 3 }

    ];

    return (

      <div classname='App'>
        
        <Search />
        <HighchartsReact
          highcharts={Highcharts}
          options={this.options}
        />

        <ResponsiveGridLayout
          layouts={{ lg: layout }}
          measureBeforeMount={true}
          className="layout"
          rowHeight={this.props.rowHeight}
          isDragable={true}
          isResizable={true}
          onDrag={this.onDragging}
          onDragStop={this.onMoveCard}
          margin={[30, 30]}
          onResizeStop={function (e, layout) {
            this.chartRefs[layout.i - 1].chart.reflow();
          }.bind(this)}
        >
          
          {gridItems.map((item, i) => {
            return (
              <div key={item.id} ref={this.conRef} className="grid-item">

                <Header />
                <HighchartsReact
                  ref={this.setChartRef}
                  containerProps={{ style: { width: "100%", height: "100%" } }}
                  options={config}
                // highcharts={Highcharts}
                />
              </div>
            );
          })}
        </ResponsiveGridLayout>
        <Botao />   
        
      </div>
    );
  }
}
