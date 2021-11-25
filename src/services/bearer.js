const bearerToken = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export default bearerToken;
