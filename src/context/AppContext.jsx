import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import axios from "axios";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  /*
        ********
        *********
        ***********
        MISC
      */

  // Topbar Title
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState({});
  const [token, setToken] = useState();

  // COURSES
  const [allCourses, setAllCourses] = useState();
  const [oneCourse, setOneCourse] = useState();
  const [courseId, setCourseId] = useState();

  // QUESTIONS
  const [allQuestions, setAllQuestions] = useState();
  const [oneQuestion, setOneQuestion] = useState();

  // TEST
  const [test, setTest] = useState();
  const [testId, setTestId] = useState();
  const [oneTest, setOneTest] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);

  // **************** //
  //*** FUNCTIONS ***//
  // **************** //

  // Get active user
  const getActiveUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/users/one?id=${userId}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setActiveUser(response.data.data.user);
    } catch (error) {
      console.log("~ activeUser ~ error", error);
    }
  };

  // COURSES
  // Get courses
  const getAllCourses = async () => {
    try {
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/courses`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:61 ~ getAllCourses ~ response:",
      //   response
      // );
      setAllCourses(response.data.data.allCourses);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:72 ~ getAllCourses ~ error:",
        error
      );
    }
  };

  // Get one course
  const getOneCourse = async (id) => {
    try {
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/courses/one?id=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:61 ~ getAllCourses ~ response:",
      //   response
      // );
      setOneCourse(response.data.data.course);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:96 ~ getOneCourse ~ error:",
        error
      );
    }
  };

  // QUESTIONS
  // Get questions
  const getAllQuestions = async (id) => {
    try {
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/questions/all?courseId=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setAllQuestions(response.data.data.allQuestions);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:115 ~ getAllQuestions ~ error:",
        error
      );
    }
  };

  // Get one question
  const getOneQuestion = async (id) => {
    try {
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/questions/one?id=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setOneQuestion(response.data.data.question);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:132 ~ getOneQuestion ~ error:",
        error
      );
    }
  };

  // TESTS
  // Get one test
  const getOneTest = async () => {
    try {
      const id = localStorage.getItem("testId");
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/tests/one?id=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:61 ~ getAllCourses ~ response:",
      //   response
      // );
      setOneTest(response.data.data.test);
    } catch (error) {
      console.log("🚀 ~ file: AppContext.jsx:166 ~ getOneTest ~ error:", error);
    }
  };

  // Answer question
  const answerQuestion = async (
    testId,
    questionId,
    index,
    questionLength,
    answer
  ) => {
    try {
      const response = await axios.post(
        `https://cbt-api-a37x.onrender.com/api/tests/answer?testId=${testId}&questionId=${questionId}&index=${index}`,
        { answer },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:183 ~ answerQuestion ~ response:",
      //   response
      // );

      if (response.status === 200) {
        if (questionLength > index + 1) {
          setQuestionIndex(questionIndex + 1);
        }
        await getOneTest(testId);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:189 ~ answerQuestion ~ error:",
        error
      );
    }
  };

  /* ***********
   *********
   ********
   */

  // ****Fetch Everything ****//
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getActiveUser();

    // Courses
    getAllCourses();

    // Test
    getOneTest();
  }, []);

  return (
    <AppContext.Provider
      value={{
        /*
          ********
          *********
          ***********
          MISC
        */
        token,
        loading,
        activeUser,
        topbarTitle,

        setLoading,
        setActiveUser,
        setTopbarTitle,

        // Courses
        courseId,
        oneCourse,
        allCourses,

        setCourseId,
        setOneCourse,
        getOneCourse,
        getAllCourses,

        // Questions
        oneQuestion,
        allQuestions,

        setOneQuestion,
        getOneQuestion,
        getAllQuestions,

        // Test
        test,
        testId,
        oneTest,
        questionIndex,

        setTest,
        setTestId,
        getOneTest,
        setOneTest,
        answerQuestion,
        setQuestionIndex,

        /* ***********
         *********
         ********
         */
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
