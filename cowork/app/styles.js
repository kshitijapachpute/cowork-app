import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginimg: {
      height:60, 
      width:60,
      marginTop: 100,
      alignSelf: "center",
    },
    loginheading: {
      fontSize: 40,
      fontWeight: "400",
      textAlign:"center",
    },
    regheading: {
        fontSize: 40,
        fontWeight: "400",
        marginTop: '20%',
      },
    main: {
      flex: 1,
      marginHorizontal: "auto",
    },
    inputarea: {
      flex: 1,
      marginVertical: 60,
      marginHorizontal: '10%',
      maxHeight: 200,
    },
    reginputarea: {
        flex: 1,
        marginVertical: 60,
        marginHorizontal: '10%',
        maxHeight: 600,
      },
    input: {
      alignSelf: "center",
      borderColor: "#E2E2E2",
      backgroundColor: "#F9F9F9",
      borderWidth: 1,
      flex: 1,
      marginRight: 2,
      width: '100%',
      maxHeight: 50,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginBottom: 15,
    },
    bottombtn: {
      flex: 1,
      justifyContent: 'flex-end',
      margin: 30,
    },
    loginbtn: {
      backgroundColor: "#5167EB",
      padding: '5%',
      alignItems: "center",
      borderRadius: 10,
    },
    logintxt: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#ffffff',
    },
    botomtxtprompt: {
        margin: 5,
        textAlign: "center"
    },
    dashhead: {
        flexDirection: 'row',
        marginVertical: '15%',
        marginHorizontal: '3%',
        alignItems: "center",
        justifyContent: "space-between",
        height: '5%',
    },
    dashtxt: {
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 5,
    },
    dashhdbtn: {
        padding: 10,
        backgroundColor: '#5167EB',
        borderRadius: 5,
        paddingHorizontal: 24,
    },
    dashcontent: {
        marginVertical: '20%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
    },
    contentbox: {
        backgroundColor: '#5167EB',
        padding: '10%',
        borderRadius: 14,
    },
    contenttxt: {
        fontSize: 20,
        left: -10,
        margin: 10,
    },
    pageheader: {
        marginVertical: '15%',
        flexDirection: 'row',
        alignItems: "center"
    },
    pghdimg: {
        height: 40,
        width: 40,
        marginHorizontal: 13,
    },
    pghdtext: {
        fontSize: 30,
    },
    bckcontent: {
        backgroundColor: '#DBDBDB',
        justifyContent: "center",
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    gridcontainer: {
        padding: 10,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    gridblock: {
        height: 50,
        width: 50,
        margin: 6,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#C7CFFC',
        backgroundColor: '#F0F5FF',
        justifyContent: 'center'
    },
    gridblockactive: {
        height: 50,
        width: 50,
        margin: 6,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#5176EB',
        backgroundColor: '#5176EB',
        justifyContent: 'center',
        color: 'white'
    },
    gridblockinactive: {
        height: 50,
        width: 50,
        margin: 6,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E3E3E3',
        backgroundColor: '#E3E3E3',
        justifyContent: 'center'
    },
    gridnumber: {
        fontSize: 20,
        textAlign: 'center',
    },
    gridnumberwhite: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    timerow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: '5%',
        paddingVertical: 10,
    },
    timecell: {
        borderWidth: 1,
        borderColor: '#C7CFFC',
        backgroundColor: '#F0F5FF',
        padding: 18,
        borderRadius: 10
    },
    timecellactive: {
        borderWidth: 1,
        borderColor: '#5167EB',
        backgroundColor: '#5167EB',
        padding: 18,
        borderRadius: 10
    },
    timecelldeactive: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        backgroundColor: '#E3E3E3',
        padding: 18,
        borderRadius: 10
    },
    time: {
        fontSize: 15,
        fontWeight: "bold"
    },
    timewhite: {
        fontSize: 15,
        color: 'white',
        fontWeight: "bold"
    },
    calcon: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.6,
        borderColor: "#E3E3E3",
        marginBottom: 20,
    },
    calobj: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'
    },
    calobjactive: {
        backgroundColor: '#5167EB',
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'
    },
  });

  export { styles };