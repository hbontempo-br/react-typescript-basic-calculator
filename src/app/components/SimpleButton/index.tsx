/**
 *
 * Button
 *
 */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  color?: 'grey' | 'lightGrey' | 'orange';
  value?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  textColor?: 'black' | 'white';
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: (props: Props) => {
        switch (props.color) {
          case 'grey':
            return theme.palette.grey['500'];
          case 'orange':
            return '#FFA142';
          default:
            return '#eee';
        }
      },
      borderRadius: (props: Props) => {
        return props.borderRadius;
      },
      height: (props: Props) => {
        return props.height;
      },
      width: (props: Props) => {
        return props.width;
      },
      fontSize: '26px',
      color: (props: Props) => {
        let color;
        props.textColor === 'black' || props.textColor === 'white'
          ? (color = theme.palette.common[props.textColor])
          : (color = theme.palette.common['black']);
        return color;
      },
    },
  }),
);

export const SimpleButton: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles(props);

  return (
    <ButtonBase className={classes.root} onClick={props.onClick}>
      {props.value}
    </ButtonBase>
  );
};

SimpleButton.defaultProps = {
  onClick: () => {},
  color: 'orange',
  value: '#',
  height: '60px',
  width: '60px',
  borderRadius: '30px',
  textColor: 'white',
};
