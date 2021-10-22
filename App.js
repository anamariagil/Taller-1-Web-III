import React,{useState}  from 'react';
import {ImageBackground, Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function Simulador() {
    const [valorPrestamo, setValorPrestamo] = useState('');
    const [tipoPrestamo, setTipoPrestamo] = useState('');
    const [numeroCuotas, setNumeroCuotas] = useState('');
    const [valorCuota, setValorCuota] = useState('');
    const [deuda, setDeuda] = useState('');

    const onLimpiar = () => {
      setValorPrestamo('');
      setTipoPrestamo('');
      setNumeroCuotas('');
      setValorCuota('');
      setDeuda('');
    }

    const onBoton = () => {
      let resValorCuota = 0;
      let resDeuda = 0;
      let resTotal = 0;
      if (valorPrestamo!="" & tipoPrestamo!="" & numeroCuotas!=""){
        if (valorPrestamo<=100000000 && valorPrestamo>=4000000){
          if (numeroCuotas<=60 && numeroCuotas>=12){
            switch (tipoPrestamo){
              case '1':
                resTotal = parseFloat(valorPrestamo)/parseFloat(numeroCuotas);
                resValorCuota = (resTotal+(parseFloat(numeroCuotas)*(resTotal*0.5)/100));
                resDeuda = (resValorCuota*numeroCuotas);
                break;
              case '2':
                resTotal = parseFloat(valorPrestamo)/parseFloat(numeroCuotas);
                resValorCuota = (resTotal+(parseFloat(numeroCuotas)*(resTotal*1.5)/100));
                resDeuda = (resValorCuota*numeroCuotas);
                break;
              case '3':
                resTotal = parseFloat(valorPrestamo)/parseFloat(numeroCuotas);
                resValorCuota = (resTotal+(parseFloat(numeroCuotas)*(resTotal*0.8)/100));
                resDeuda = (resValorCuota*numeroCuotas);
                break;
              case '4':
                resTotal = parseFloat(valorPrestamo)/parseFloat(numeroCuotas);
                resValorCuota = (resTotal+(parseFloat(numeroCuotas)*(resTotal*2)/100));
                resDeuda = (resValorCuota*numeroCuotas);
                break;
            }
          }else{
            alert("El número de cuotas debe estar entre 12 y 60")
          }  
        }else{
          alert("El valor del préstamo debe estar entre 4.000.000 y 100.000.000")
        } 
        setValorCuota(resValorCuota)
        setDeuda(resDeuda)
      }else{
        alert("Debe ingresar todos los datos")
      }
    };
  return (
    <View>
      <ImageBackground source={require('./images/fondowebIII.jpg')} style={{width:1366,height:695,borderRadius:50,flex: 1, justifyContent: "center"}} />
      <View>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={{alignSelf: 'center', fontFamily: 'Comic Sans', fontSize: 40, color: '#02457B'}}>Simulador de crédito</Text>
        <Text>{"\n"}</Text>
      </View>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Valor Préstamo</Text>
      </View>
      <View style={styles.cuadro}>
        <TextInput type="number" placeholder="4.000.000 - 100.000.000" style={styles.espacios1} onChangeText={valorPrestamo =>setValorPrestamo(valorPrestamo)} value={valorPrestamo}></TextInput>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Tipo Préstamo</Text>
      </View>
      <View style={styles.cuadro}>
        <Picker selectedValue={tipoPrestamo} onValueChange={(itemValue, itemIndex) => setTipoPrestamo(itemValue)} style={{backgroundColor:'#C0DBF1', borderRadius:2, borderWidth:2, color:'black'}}>
          <Picker.Item value="1" label="Vivienda" />
          <Picker.Item value="2" label="Vehículo" />
          <Picker.Item value="3" label="Educación" />
          <Picker.Item value="4" label="Libre Inversión" />
        </Picker>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Número de Cuotas</Text>
      </View>
      <View style={styles.cuadro}>
        <TextInput type="number" placeholder="12-60" style={styles.espacios1} onChangeText={numeroCuotas =>setNumeroCuotas(numeroCuotas)} value={numeroCuotas}></TextInput>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Valor Cuota</Text>
      </View>
      <View style={styles.cuadro}>  
        <TextInput type="number" placeholder={setValorCuota} style={styles.espacios2} onChangeText={valorCuota =>setValorCuota(valorCuota)} value={valorCuota}></TextInput>
        <Text>{"\n"}</Text>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Total Deuda</Text>
      </View>
      <View style={styles.cuadro}>  
        <TextInput type="number" placeholder={setDeuda} style={styles.espacios2} onChangeText={deuda =>setDeuda(deuda)} value={deuda}></TextInput>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <TouchableOpacity style={styles.boton} onPress={()=>onBoton()}>
          <Text style={styles.textos}>
            Calcular
          </Text>
        </TouchableOpacity>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <TouchableOpacity style={styles.boton} onPress={()=>onLimpiar()}>
          <Text style={styles.textos}>
            Limpiar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  espacios1: {
      backgroundColor: '#C0DBF1',
      borderRadius:2,
      borderWidth:2,
      color:'black'
  },
  espacios2: {
      borderRadius:2,
      borderBottomWidth:2,
      color:'black'
  },
  cuadro: {
      alignSelf: 'center',
      flexDirection:'row', 
      flexWrap:'wrap'
  },
  textos: {
      fontFamily: 'Comic Sans',
      fontSize : 20,
  },
  boton: {
    padding:5,
    borderRadius:5,
    margin:1,
    borderWidth:1,
    borderColor:'black',
  }
})
