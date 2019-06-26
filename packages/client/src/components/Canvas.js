import React from 'react';
import CanvasDraw from 'react-canvas-draw';
import { FaEraser, FaUndo } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import '../../assets/style/canvas.css';
import { thisExpression } from '@babel/types';

export class Canvas extends React.PureComponent {
  constructor(props) {
    super(props);

    this.ref = null;
    this.beforeData = null;
    this.timerId = null;
    this.colors = ['#444', '#3498db', '#ff874d', '#67a2a0'];

    this.state = {
      color: this.colors[0]
    };
  }

  componentDidMount() {
    if (this.props.toolbar) {
      this.timerId = setInterval(() => {
        this.setData();
      }, 1000);
    } else {
      this.timerId = setInterval(() => {
        this.getData();
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  changeColor = () => {
    // rotate array
    this.colors = this.colors.concat(this.colors.splice(0, 1));
    this.setState({ color: this.colors[0] });
  };

  setData = () => {
    window.localStorage.setItem('fusumaCanvasCoordinate', this.ref.getSaveData());
  };

  getData = () => {
    const data = window.localStorage.getItem('fusumaCanvasCoordinate');

    if (this.beforeData !== data) {
      this.ref.loadSaveData(data, true);
      this.beforeData = data;
    }
  };

  undo = () => {
    this.ref.undo();
  };

  clear = () => {
    this.ref.clear();
  };

  render() {
    const { disabled, hideGrid, toolbar } = this.props;

    return (
      <>
        {toolbar && (
          <div className="fusuma-canvas-toolbar">
            <MdDelete onClick={this.clear} size="32" />
            <FaUndo onClick={this.undo} />
            <div
              style={{ background: this.state.color }}
              onClick={this.changeColor}
              className="fusuma-canvas-toolbar-color"
            />
          </div>
        )}
        <CanvasDraw
          ref={(ref) => (this.ref = ref)}
          className="fusuma-canvas"
          canvasWidth="100%"
          canvasHeight="100%"
          loadTimeOffset={0}
          brushColor={this.state.color}
          disabled={disabled}
          hideGrid={hideGrid}
          lazyRadius={0}
          brushRadius={8 /* TODO: become an option */}
        />
      </>
    );
  }
}

export function getValue() {
  return JSON.parse(window.localStorage.getItem('fusumaCanvasEvent'));
}

export function listenCanvasEvent(cb) {
  window.addEventListener('storage', (e) => {
    if (e.key === 'fusumaCanvasEvent') {
      cb(JSON.parse(e.newValue));
    }
  });
}

export function emitCanvasEvent(event) {
  window.localStorage.setItem('fusumaCanvasEvent', JSON.stringify(event));
}
