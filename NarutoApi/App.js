import axios from 'axios'
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';

DropDownPicker.setTheme("DARK");

export default function App() {

  const baseURL = 'https://dattebayo-api.onrender.com';

  let client = axios.create({
    baseURL: baseURL,
    params: {
      limit: 70
    }
  });

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Todos', value: 'todos' },
    { label: 'Akatsuki', value: 'akatsuki' },
    { label: 'Aburame', value: 'Aburame' },
    { label: 'Akimichi', value: 'Akimichi' },
    { label: 'Funato', value: 'Funato' },
    { label: 'Hyūga', value: 'Hyūga' }
  ]);

  const namesClans = [
    'Aburame',
    'Akimichi',
    'Funato',
    'Hyūga'
  ]

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataFunction();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [value]);


  useEffect(() => {
    name.split() != "" ? setValue(null) : setValue('todos');

    client = axios.create({
      baseURL,
      params: {
        name: name
      }
    });

    setDataFunction();
  }, [name]);

  async function setDataFunction() {
    if (name.length > 0 && name.split() != "") {
      const response = await client.get('https://dattebayo-api.onrender.com/characters');
      setData(response.data.characters);
      console.log(response.data.characters)
    } else if (value == 'akatsuki') {
      setLoading(true);
      const response = await client.get('https://dattebayo-api.onrender.com/akatsuki');
      setData(response.data.akatsuki);
    } else if (value == 'todos') {
      const response = await axios.get('https://dattebayo-api.onrender.com/characters');
      setData(response.data.characters)
    } else if (namesClans.indexOf(value) != -1) { //value == 'Aburame' || value == 'Akimichi' || value == 'Funato' || value == 'Hyūga'
      const clans = await axios.get('https://dattebayo-api.onrender.com/clans');

      const filtered = clans.data.clans.filter((clan) =>
        clan.name.toLowerCase().includes(value.toLowerCase())
      );

      const charactersById = await Promise.all(
        filtered[0].characters.map(async (id) => {
          const responseCharacter = await axios.get(`https://dattebayo-api.onrender.com/characters/${id}`);
          return responseCharacter.data;
        })
      );

      setData(charactersById);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Lista de Personagens de naruto</Text>
      </View>

      <View>
        <Text style={[styles.textFindPerson, {marginBottom: 10}]}>Selecione um clãn ou organização</Text>
      </View>

      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
      />

      <View>
        <Text style={styles.textFindPerson}>Digite o nome do personagem</Text>
        <TextInput style={styles.textInputFindPerson} value={name} onChangeText={setName} placeholder="Nome" />
      </View>

      <FlatList
        style={{ width: '100%' }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ display: 'flex', maxWidth: '100px', textAlign: 'center'}}>
              <Text style={styles.textName}>{item.name}</Text>
              <Image
                source={item.images[0]}
                style={{ width: '100px', height: '100px' }}
              />
            </View>
          )
        }}
        contentContainerStyle={styles.listPersons}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18191A',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: '1.8em',
    textAlign: 'center',
    fontWeight: 900,
    marginTop: 15,
    marginBottom: 15,
    color: '#F5F6F7',
  },
  listPersons: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end'
  },
  textName: {
    color: '#F5F6F7',
    fontSize: 15,
    fontWeight: 600,
  },
  textFindPerson: {
    color: '#F5F6F7',
    fontSize: 16,
  },
  textInputFindPerson: {
    borderColor: '#F5F6F7',
    borderWidth: 2,
    paddingLeft: 5,
    borderRadius: 5,
    marginTop: 7,
    height: 35,
    color: '#F5F6F7',
    marginBottom: 15,
  },
  dropdown: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})