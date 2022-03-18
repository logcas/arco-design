import React, { useState } from 'react';
import { Slider, Switch, Form, Typography } from '@self';

const defaultConfig = {
  showTicks: false,
  showInput: false,
  onlyMarkValue: false,
  reverse: false,
};

const marks = {
  0: '0km',
  1: '1km',
  2: '2km',
  3: '3km',
  5: '5km',
};

function Demo() {
  const [config, setConfig] = useState(defaultConfig);

  return (
    <div style={{ width: 600 }}>
      <Form
        style={{ margin: '20px' }}
        layout="inline"
        onValuesChange={(_, values) => {
          setConfig(values);
        }}
      >
        {Object.keys(defaultConfig).map((key) => (
          <Form.Item
            label={key}
            field={key}
            triggerPropName="checked"
            key={key}
            initialValue={config[key]}
          >
            <Switch />
          </Form.Item>
        ))}
      </Form>

      <div style={{ marginBottom: 20 }}>
        <Typography.Text bold>分段区间-滑动输入条</Typography.Text>
        <Slider
          {...config}
          max={5}
          defaultValue={10}
          marks={marks}
          getIntervalConfig={([begin, end]) => {
            const interval = `${begin}~${end}`;
            switch (interval) {
              case `0~1`: {
                return { width: '50%', step: 0.1 };
              }
              default:
                return { step: (end - begin) / 5 };
            }
          }}
        />
        <Slider
          {...config}
          max={5}
          marks={marks}
          range
          getIntervalConfig={([begin, end]) => {
            const interval = `${begin}~${end}`;
            switch (interval) {
              case `0~1`: {
                return { width: '50%', step: 0.1 };
              }
              default:
                return { step: (end - begin) / 5 };
            }
          }}
        />
      </div>
      <Typography.Text bold>未分段-滑动输入条</Typography.Text>
      <Slider
        max={5}
        defaultValue={1}
        marks={marks}
        step={0.1}
        showTicks
        getIntervalConfig={() => ({ width: '0.2', step: '0.1' })}
      />
    </div>
  );
}
export default Demo;
