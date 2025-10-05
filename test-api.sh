#!/bin/bash

# Test Contact API
echo "Testing Contact API..."
curl -X POST "http://localhost:8000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "naam": "Test Gebruiker",
    "email": "test@example.com",
    "telefoon": "06-12345678",
    "onderwerp": "Test Bericht",
    "bericht": "Dit is een test bericht voor het contact formulier."
  }'

echo -e "\n\nTesting Wachtlijst API..."
curl -X POST "http://localhost:8000/api/wachtlijst" \
  -H "Content-Type: application/json" \
  -d '{
    "naam": "Dr. Test Arts",
    "email": "test@huisartsenpraktijk.nl",
    "telefoon": "06-98765432",
    "praktijk": "Test Huisartsenpraktijk"
  }'
