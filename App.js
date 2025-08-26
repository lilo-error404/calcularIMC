import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const alturaFloat = parseFloat(altura);
    const pesoFloat = parseFloat(peso);

    if (!alturaFloat || !pesoFloat || alturaFloat <= 0 || pesoFloat <= 0) {
      setMensagem('Por favor, insira valores válidos.');
      setImc(null);
      return;
    }

    const resultado = pesoFloat / (alturaFloat * alturaFloat);
    setImc(resultado.toFixed(2));

    // Mensagem opcional com base no resultado
    if (resultado < 18.5) {
      setMensagem('Abaixo do peso');
    } else if (resultado < 24.9) {
      setMensagem('Peso normal');
    } else if (resultado < 29.9) {
      setMensagem('Sobrepeso');
    } else {
      setMensagem('Obesidade');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.inputs}
        placeholder='Sua Altura (ex: 1.75)'
        value={altura}
        onChangeText={setAltura}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.inputs}
        placeholder='Seu Peso (ex: 70.5)'
        value={peso}
        onChangeText={setPeso}
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {imc && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
          <Text style={styles.resultText}>{mensagem}</Text>
        </View>
      )}
    </View>
  );
}

// import './App.css'
// import HelloWorld from './hello-world/HelloWorld'
// import Calculadora from './calculadora/Calculadora'
// import CalculadoraIMC from './calculadora-imc/CalculadoraIMC'

// function App() {
//   return (
//     // <HelloWorld />
//     <CalculadoraIMC />
//   );
// }

// export default App;
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { useState } from 'react';
// import { styles } from './style';

// export default function App() {

//   const [peso, setPeso] = useState('');
//   const [altura, setAltura] = useState('');
//   const [imc, setImc] = useState('');
//   const [estado, setEstado] = useState('');
//   const [textoImc, setTextoImc] = useState('');

//   const calculaImc = () => {
//     if (peso != '' && altura != '' && !isNaN(peso) && !isNaN(altura)) {
//       const valorImc = peso / altura ** 2;
//       setImc(valorImc.toFixed(1));
//       setTextoImc('Imc: ');

//       const estadoPessoa = (valorImc < 17) ? 'Muito abaixo do peso' : 
//       (valorImc >= 17 && valorImc < 18.5) ? 'Abaixo do peso' :
//       (valorImc >= 18.5 && valorImc < 25) ? 'Peso normal' : 
//       (valorImc >= 25 && valorImc < 30) ? 'Acima do peso' :
//       (valorImc >= 30 && valorImc < 35) ? 'Obesidade 1' :
//       (valorImc >= 35 && valorImc < 40) ? 'Obesidade 2' : 'Obesidade 3';

//       setEstado(estadoPessoa);
//     }
//   }


//   const limpar = () => {
//     setPeso('');
//     setAltura('');
//     setImc('');
//     setEstado('');
//     setTextoImc('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Cálculo do IMC</Text>

//       <TextInput
//         style={styles.input}        
//         placeholder="Seu peso..."
//         placeholderTextColor="#002"
//         keyboardType='numeric'
//         value={peso}
//         onChangeText={ (peso) => setPeso(peso)}
//       />

//       <TextInput
//         style={styles.input}        
//         placeholder="Sua altura..."
//         placeholderTextColor="#002"
//         keyboardType='numeric'
//         value={altura}
//         onChangeText={ (altura) => setAltura(altura)}
//       />

//       <View style={{ flexDirection: "row" }}>
//         <View>
//           <TouchableOpacity style={styles.buttonEnviar} onPress={calculaImc}>
//             <Text style={styles.buttonText}>Enviar</Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <TouchableOpacity style={styles.buttonLimpar} onPress={limpar}>
//             <Text style={styles.buttonText}>Limpar</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <Text style={styles.output}>{textoImc} {imc}</Text>
//       <Text style={styles.output}>{estado}</Text>

//     </View>
//   )
// }