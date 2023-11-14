# Encrypt or decrypt password for voult application using crypto

### Endpoints to use:

- `/data/encrypt_value`: Endpoint to encrypt string object
  - GET Method
  - `?t=value to encrypt`
  - `http://localhost:3000/data/encrypt_value?t=value to encrypt` This will call endpoint and provide you encrypted value for `value to encrypt` string.
- `/data/encrypt_value`: Endpoint to decryp value to original form
  - GET Method
  - `?t={encrypted form of value to encrypt string}`
  - `http://localhost:3000/data/encrypt_value?t={encrypted form of value to encrypt string}` This will call endpoint and provide you decrypted value for encrypted form of `value to encrypt` string.

### Env Variable Needed

- NODE_ENV=dev
- ENCRYPTION_METHOD=aes-256-cbc
- ENCRYPTION_SECRET_KEY="eYedsfEyjjadsyssiedkksddkkdd==="
- ENCRYPTION_SECRET_VI="eYedsfEyjjadsyssiedkksddkkddsecretv1==="
