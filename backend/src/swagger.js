import swaggerAutogen from 'swagger-autogen';

const generateSwagger = async () => {
  const swaggerAutogenInstance = swaggerAutogen();
  const outputFile = './swagger_output.json';
  const endpointsFiles = ['./routes/authRouter.js', './routes/userRouter.js', './routes/bookingRouter.js'];

  await swaggerAutogenInstance(outputFile, endpointsFiles);
};

generateSwagger();
