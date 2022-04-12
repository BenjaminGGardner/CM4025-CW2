export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First!",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2022-04-12",
    },
    {
      id: "2",
      body: "Second :<",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2022-04-12",
    },
    {
      id: "3",
      body: "I can reply to comments?!",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2022-04-12",
    },
    {
      id: "4",
      body: "I can reply to my own comments?!!!",
      username: "John",
      userId: "2",
      parentId: "2",
      createdAt: "2022-04-12",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "User Name here not working",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};