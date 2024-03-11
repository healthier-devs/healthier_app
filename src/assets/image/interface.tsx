export interface IIcon extends React.HTMLAttributes<SVGElement> {
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
}
