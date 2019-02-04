import { css, cx } from 'emotion';
import { black12, darkBlue } from './colors';

export const checked =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAABgdJREFUWAm9mb2PlFUUxu87szs7y0ejiV+gsdDEhMQPEG3sLMDSwq9YGRUNq7GgMjERCzWxMYKIDSCJGhL/A61RC0TUQFBLtTBECwPIzjI7nue893f3vHcGiIWeZN97vp7nPPfe2dnd2SbJtjw22PTonj39hQ1Pp6bZ0liqsYdWma85Vh6T2+nLNVq8ruaQbzJB6TEn+mkyOTtZuXjs1MfvvJ1OfzZqJG7zk6//3KTmtnpYAeYhJc6OFgRHH02lP/Sp1gMU8urtAZCfJr+cOLz3jmbTa1+/2ixsfKs3P0z99del3tyc7wixBWMOfiRSjpi5ZZUA+5IVPnPIxTz+ZHw5jc//kVZXllMaXXij1xvYtZpFcYqxiZzMKF+DPJfTRUyYOqHBesCYW4wyWBXwe/25NL/heu9tFtY90ZvYa84brCAD7AEPS2p+0EDFV2GiKA2jt14FIAdmCm9aWsHNXb0IqH0BC5mKM0xD6KHM4BiLC4u+clN4Gm11gQBEjA8wxgFXXK6mJMxRDpzWeKKxL/qRR4LZpAuMjfJjs9fCFgGSipuiFvlKX05OqibwVbpQdAQibKqZ4zAYp0GK2NesJuLVpxiheh/El4qIVywTRnlZRyBEFNuWtSeiWFURRnEUVeMVdzBrlAXXwQc+F8iOIKqb4aNPsXyGxrxqwpNjVX6W1Zuhh7wLZFAkprFeES+MhrMpXyGyfHDLKYlLr8FatHOFpGLmdK4Y1SLC4iBygYtUe2q5IB56wBPzs1hA5qmGIM+HWkegihDiO3FmV81PSsVsImZ4zMGjGpgX7xukZ+6eLzOEjcIK3hzy/uMjDpjpu7JpIRBea9Ww3VsH6bl7B96q+OgPK+5zipGDTSk39RqMjdKlr3hEImcTqnE6aptl6oni1LN+vtsJD1nFnGC5Ypq0Yggpd2KFKIg6a8GFRC3uo+9H6cDJ9vRKvzkIUk5wTrYIhJNVjbMsniD1uCnlGCZxz+drVV7i3v9mVG5AORl4ZiuGowj0RqvQrFgGSP6gn9Kw/aVHoffOEqzd1+KOII6jcYb2wQwXZiliVTsChY1FNbhgS0rcgR3D9OHOYVowX6Ze5rEqv9u+W3eFk0OcajIOIWLw6/kdgRHsTDyM8d2Hh+mhzXPpwVvmXOQwiwTDlSzZte4ygdiR76avFRFg/ORQnYEIdoEAVIu+MMSfnllJy5dblgck8pHFtGjXHa+4FnfYxO2315x64vzo1zMVx7oLJFETSRy147+O09Lnl4rI7Tf30wc7F9O6/JaxtK17ckWcceg02KgEzDJOTDWfmwdPXbE31Gw5nilyx2J6ZfsgvRCuVeL22ckxTCsb/c9/H/zyt3F6KZzk/XaSz96z9po7ZOLeO9GKQ1h8Gfwvvw8er0RKiEzi9pm4eF3KK+YEFXf8HGgT2NQVc6MQ1c0RiP9VJfLQqVac6p0TA3CFtd4MbeT9bRfxIuaPcBrr1YfnE5HIl7+4lLbe2E8Hv22/WyEWJxsHIy69BuMnC56zR5wrLJjwc6G9CgGixUHkGaxYIvWlHOK00gOe+Gq/DxZ84Jr6LhYhBjnTPLZJnR4LGF5wlqNHNQ0mVg++TklftSlF/qpv1GVwJilxzXiN2K8r9EQeTi2UO7cx9UYdG30nSgTGOEz1+nQiXv6/6QHrc/UwK1c8i6joys0CREHUWVWXxVOpa6oHOoW+f66UGI4iECJWR854xBOkXA+Mw1SLmCv9VScuZoNRrghUIKJ6GCDVa4Oo7mH36qcGb/wuhi/2qI9Y9Y5AEceiGpw4Jx1sfhlmdcSwOoaGjI81r+thFvP49fxeM5mcVrM+2fTVn9XDBgpYg+mSnnitGkZvvQpDDkyNl5ZW8ORsb3V0/hMBxhf+dJGARSQgsfxZFl9f1Bkc44iPvnqYIV/iRvYRsGy8fPGYf4h+61N7fzQ1tyvJ7lk9lx8ianemREvc6cuTGFhWc9b81luL13jg1MqH6P107sz4r9/PHdx457a/m7nBTfYivoGfi5EkgqMo5TU99ha/LZViyRsBPninUXJ19Sf7N8T+k0fffFz/hvgHBRo+/wP+sg8AAAAASUVORK5CYII=';

export const unchecked =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAAptJREFUWAntmU+OEkEUxruBdjCMxH/J4AE4ADsNJ3DnwksMG9yQeAQDC2TDOWZpPICydM8FhsQ4kQhRmj++r6e+tqh0TKpiNWNSL3l51VXv1fvxpXpBVxz9sViG58oTiXg+pR2keSr+Qzmec6iajJ+Kn2HyDtovYfoqvoWK8Avxs36/3+r1em8bjcaLWq12Ece3IjNKjlc7HDIRI8TtdrtYrVafp9Ppu8lkci2NAb0A0QPxx4AdDAYfkiR5CEDdZb00A6zuaZrejEajlwr6G4Cfid+bz+fvm83mq0qlEsGLgH0pTWWhig673+8j+HK5vGq3229keYOzixcskmPwvFqtZqA6NNYIyoi5f2kE1iNAYegJNtUvAXB2UOUotLCoQ+OZrgq8Bl1dNELv3W4XgU01jgGcma6qCY0EFPs0U13Cgku3HBgJOrQ+RkGZwOiHI0FY/hjMHwEDygTnHJJ9GvoQTAc1+x8BA4gJZvQJW7Q3+5OJOTkwF5BIY5E+xzWfkUqzv97rCJgLRYm+oQkJhqL+ZMtfwb8lMfkU0eTKgU8B49IzALuoZlMTFLZRyyU3KOyimk1NUNhGLZfcoLCLajY1QWEbtVxyg8IuqtnUBIVt1HLJDQq7qGZTExS2UcslN1cYf7P1v9oum/moMbkKv0swSf8WUeaPYf8iAY6AzcQyIQFX1N9kADAuFuLNZnNdr9dbLDITsaFv03tzjJ5gU70POMO4WorW6/UnJvFTvf7Msa+Intzb7A82BZxWZYCvf/flvH7pdruv5VMnxmr9NmAjGDf0HQmPqC5lLmez2UoQvgMYCtdl4qcsXnU6nScC/Uj8nGCyXgqsriyuveQy5uNwOLwcj8cLQcC11w2lxFn+by4WhTUzwN/5q9vf0eU87TIsgVUAAAAASUVORK5CYII=';

export const disabledUnchecked =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAaxJREFUWAntmE1OwzAQhUkLEqiwY1FOwP2P0xOwKMvyI0Eo73P6qpHDopJjs/FIrzOe4MzHS7qoh6sprpWepHuJ+igRztOq3udwujX5WzpIL9Q0AHqWqAEylLNaTSJCmmUH3Fai8SV9Sj9SBNXyDE29ZBiKe1KjlXQr3UhbADcSUMCNp9ru5VmXFw0DxsxMWNbSBkAKmjx7cnTQgGpXDbtnUOaiNYARCgfjWsu0JtcKQ5F5vAlMGaNWEdDOkV2rbArIPCDNMBgQajtnOPfYVDOYYxeZTbBO8w1I00B55lrL8HxmHgEkYjOu6bcMO3nm4XnHOF+IzYb1bL6/Na2duuR/TrC5g5dsbPo3HbDU7u5gd7DUgdL9/R3sDpY6ULq/v4PdwVIHSvf3d7A7WOpA6f7+Di7hIL9F/Xu09H5L7k9c+SP+b9jZfJ8s5BdYt4y/5icGADlyY4GbHN60htPINNOQZqE/AvgmPUh30rtE5KdMU7fOpw0xGAeqsLA+ALiXAKTmOJgjBwOqTGtyrTAg9+cpsgaS2PsijUcJch8Jzw5ydK1WwGHxyn1Ir9L4Cxr+cGyIPcGNAAAAAElFTkSuQmCC';

export const disabledChecked = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEXMztHLztHR0dbLzc8AAADN0dbMz9PLztHM0NTO0db////R1dn29/jy8/T7+/zs7vDW2d3e4OTt7vD4+PmFnxz8AAAABXRSTlPwxiz1AIHlTUoAAAEXSURBVEjH7VbRDsIgDCxTYaAbQ///Xx029UTXrbzbBJJL71LKdil0HhwFY5AbzjScgjdHOA3kwioY29CwD8ERVfrFFKvCE4UXP154cWi41qgCTiGnYxFwIKFiCIwSEbSZqGAIDGfZ7iHKruFWgFZULAJjAxAY7/Qt8N3fwXhJbYXYJIHjVD6w5woVKJo4pbkIRtP6WaaU0rwI/BVs8dPt+i3Q/n/hI791S2URqfD3/VDkyODv+SEWaRL8fT/kxArwj/xwZ4XwD/yAGg/mH/kBNZhv9EMWvtkPWfhmP2Tmd/ghV36XH64NtvuB49APGobAFrofdPyfDx3zYTTOBx67dbAbGsBgd6HWGHlh28T16dD9OOl+/jwBqRU2VL2QeUEAAAAASUVORK5CYII=';


const baseClass = css`
  position: relative;
  padding: 8px 0;
`;

const defaultBoxShadow = `inset 0 1px 4px 0 ${black12}`;

const inputClass = css`
  height: 24px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 24px;
  
  &:checked + label::before {
    background-image: url(${checked});
  }
  
  &:focus + label::before, &:hover + label::before {
    border-color: ${darkBlue};
    box-shadow: ${defaultBoxShadow}, 0 0px 4px 0 ${darkBlue};
  }
`;

const labelClass = css`
  display: flex;
  align-items: center;
`;

const checkboxMarkClass = css`
  &::before {
    content: "";
    display: inline-block;
    height: 24px;
    width: 24px;
    margin-right: 16px;
    border-radius: 4px;
    background-image: url(${unchecked});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
`;

type GetCheckboxClassNamesOptions = {
  className?: string,
  labelClassName?: string,
  containerClassName?: string,
};

export function getCheckboxClassNames(options: GetCheckboxClassNamesOptions) {
  return {
    className: cx(
      inputClass,
      options.className,
    ),
    labelClassName: cx(
      labelClass,
      checkboxMarkClass,
      options.labelClassName,
    ),
    containerClassName: cx(
      baseClass,
      options.containerClassName,
    ),
  };
}
