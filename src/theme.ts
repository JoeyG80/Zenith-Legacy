import {IStyles} from './models/models';

const primaryColorDark = '#2c2828';
const secondaryColorDark = '#373333';
const tertiaryColorDark = '#413D3D';
const quaternaryColorDark = '#696666';
const primaryColorLight = 'white';
const secondaryColorLight = 'lightgray';
const tertiaryColorLight = 'gray';
const zenithGreen = '#24A3A1';
const font = 'roboto';
const fontSize = '14px';
const primaryFontColorLight = 'black';
const primaryFontColorDark = 'white';
const borderRadiusDark = '10px';
const borderRadiusLight = '5px';

const lightTheme: IStyles = {
  background: {
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: primaryColorLight,
    borderRadius: borderRadiusLight,
    boxShadow: '0 2px 6px rgba(0,0,0,0.75)',
    borderColor: 'black',
    cursor: 'pointer',
    color: primaryFontColorLight,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: primaryColorLight,
    borderRadius: borderRadiusLight,
    color: primaryFontColorLight,
    cursor: 'initial',
    padding: '5px 10px',
    opacity: '50%',
    width: '50%',
    fontWeight: 'bold',
  },
  drawer: {
    paddingTop: '15px',
    paddingLeft: '15px',
    paddingRight: '15px',
    height: '100%',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    cursor: 'initial',
  },
  iconButton: {
    cursor: 'pointer',
  },
  input: {
    color: primaryFontColorLight,
  },
  link: {
    padding: '5px',
    color: primaryFontColorLight,
    cursor: 'pointer',
  },
  materialTableRow: {
    cursor: 'initial',
  },
  navBar: {
    backgroundColor: zenithGreen,
    color: primaryFontColorLight,
    fontSize: fontSize,
    fontFamily: font,
    textDecoration: 'none',
    position: 'sticky',
    top: '0px',
    width: '100%',
    zIndex: 1201, // Place above paper props on material ui drawer component
  },
  overlay: {
    backgroundColor: primaryColorLight,
    boxShadow: '0 2px 6px rgba(0,0,0,0.75)',
    borderRadius: borderRadiusLight,
    color: primaryFontColorLight,
    height: '100%',
    padding: '1px 10px 10px 10px',
    margin: '1.5em 1em 2em 1em',
  },
  progressBar: {
    backgroundColor: 'gray',
  },
  searchBar: {
    backgroundColor: zenithGreen,
  },
  settingsMenu: {
    backgroundColor: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '250px',
    height: '100%',
  },
  subTotalRow: {
    backgroundColor: secondaryColorLight,
  },
  text: {
    padding: '5px',
    color: primaryFontColorLight,
    cursor: 'initial',
  },
  totalRow: {
    backgroundColor: tertiaryColorLight,
    fontWeight: 'bold',
  },
};

const darkTheme: IStyles = {
  background: {
    backgroundColor: primaryColorDark,
  },
  button: {
    backgroundColor: quaternaryColorDark,
    borderRadius: borderRadiusDark,
    cursor: 'pointer',
    color: primaryFontColorDark,
  },
  buttonDisabled: {
    backgroundColor: quaternaryColorDark,
    borderRadius: borderRadiusDark,
    color: primaryFontColorDark,
    cursor: 'initial',
    opacity: '50%',
  },
  drawer: {
    paddingTop: '15px',
    paddingLeft: '15px',
    paddingRight: '15px',
    height: '100%',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flexStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    cursor: 'initial',
  },
  iconButton: {
    cursor: 'pointer',
    color: 'white',
  },
  input: {
    color: primaryFontColorDark,
    backgroundColor: tertiaryColorDark,
  },
  link: {
    padding: '5px',
    color: primaryFontColorDark,
    cursor: 'pointer',
  },
  materialTableRow: {
    borderBottom: `1px solid ${primaryColorDark}`,
    color: 'white',
    cursor: 'initial',
  },
  navBar: {
    backgroundColor: zenithGreen,
    color: primaryFontColorLight,
    fontSize: fontSize,
    fontFamily: font,
    textDecoration: 'none',
    position: 'sticky',
    top: '0px',
    width: '100%',
    zIndex: 1201, // Place above paper props on material ui drawer component
  },
  overlay: {
    backgroundColor: secondaryColorDark,
    border: `0px solid ${secondaryColorDark}`,
    borderRadius: borderRadiusDark,
    color: primaryFontColorDark,
    height: '100%',
    padding: '1px 10px 10px 10px',
    margin: '1.5em 1em 2em 1em',
  },
  progressBar: {
    backgroundColor: 'gray',
  },
  searchBar: {
    backgroundColor: zenithGreen,
  },
  settingsMenu: {
    backgroundColor: primaryColorDark,
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '250px',
    height: '100%',
  },
  subTotalRow: {
    backgroundColor: tertiaryColorDark,
  },
  text: {
    padding: '5px',
    color: primaryFontColorDark,
    cursor: 'initial',
  },
  totalRow: {
    backgroundColor: quaternaryColorDark,
    fontWeight: 'bold',
  },
};


export {lightTheme};
export {darkTheme};
