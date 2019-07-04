import React, { memo, useState, useRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { FaEraser, FaUndo } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import '../../assets/style/canvas.css';
import { thisExpression } from '@babel/types';

let colors = ['#444', '#3498db', '#ff874d', '#67a2a0'];
let beforeData = null;
let timerId = null;

export const Canvas = memo(({ toolbar, disabled, hideGrid }) => {
  const canvasRef = useRef();
  const [color, changeCurrentColor] = useState(colors[0]);

  const changeColor = () => {
    // rotate array
    colors = colors.concat(colors.splice(0, 1));
    changeCurrentColor(colors[0]);
  };

  const setData = () => {
    window.localStorage.setItem('fusumaCanvasCoordinate', canvasRef.current.getSaveData());
  };

  const getData = () => {
    const data = window.localStorage.getItem('fusumaCanvasCoordinate');
    if (beforeData !== data) {
      canvasRef.current.loadSaveData(data, true);
      beforeData = data;
    }
  };

  const undo = () => {
    canvasRef.current.undo();
  };

  const clear = () => {
    canvasRef.current.clear();
  };

  useEffect(() => {
    if (toolbar) {
      timerId = setInterval(setData, 1000);
    } else {
      timerId = setInterval(getData, 1000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, []);

  return (
    <>
      {toolbar && (
        <div className="fusuma-canvas-toolbar">
          <MdDelete onClick={clear} size="32" />
          <FaUndo onClick={undo} />
          <div
            style={{ background: color }}
            onClick={changeColor}
            className="fusuma-canvas-toolbar-color"
          />
        </div>
      )}
      <CanvasDraw
        ref={canvasRef}
        className="fusuma-canvas"
        canvasWidth="100%"
        canvasHeight="100%"
        loadTimeOffset={0}
        brushColor={color}
        disabled={disabled}
        hideGrid={hideGrid}
        lazyRadius={0}
        brushRadius={8 /* TODO: become an option */}
      />
    </>
  );
});

export function getValue() {
  const value = window.localStorage.getItem('fusumaCanvasEvent');

  return JSON.parse(value || { status: 'none' });
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
