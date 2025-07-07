import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const QUESTIONS = [
  "What's something new you'd like us to try together?",
  "What's one thing that made you smile today?",
  "If you could describe our love in three words, what would they be?",
  "What memory of us always makes you laugh?",
  "What's one dream you have for us in the next year?",
  "When did you feel most supported by me this week?",
  "What's a fun place you'd like to visit together?",
];

export default function SpeakingCardsScreen() {
  const [remaining, setRemaining] = useState([...QUESTIONS]);
  const [used, setUsed] = useState([]);
  const [current, setCurrent] = useState('');

  function newCard() {
    let rem = [...remaining];
    let us = [...used];
    if (rem.length === 0) {
      rem = [...QUESTIONS];
      us = [];
    }
    const idx = Math.floor(Math.random() * rem.length);
    const q = rem.splice(idx, 1)[0];
    us.push(q);
    setRemaining(rem);
    setUsed(us);
    setCurrent(q);
  }

  useEffect(() => {
    newCard();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speaking Cards</Text>
      <LinearGradient
        colors={['#ff7eb3', '#ff65a3']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.card}
      >
        <Text style={styles.question}>{current}</Text>
      </LinearGradient>
      <TouchableOpacity onPress={newCard} style={styles.button}>
        <Text style={styles.buttonText}>New Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  card: {
    width: '100%',
    borderRadius: 12,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  question: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#ff65a3',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
