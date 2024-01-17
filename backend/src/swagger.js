import swaggerAutogen from 'swagger-autogen';

const generateSwagger = async () => {
  const swaggerAutogenInstance = swaggerAutogen();
  const outputFile = './swagger_output.json';
  const endpointsFiles = ['./routes/authRouter.js', './routes/userRouter.js'];

  await swaggerAutogenInstance(outputFile, endpointsFiles);
};

generateSwagger();
