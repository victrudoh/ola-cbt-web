import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { error } from "../helpers/Alert";
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
  const [sidebarActive, setSidebarActive] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState({});
  const [token, setToken] = useState();

  // COURSES
  const [allCourses, setAllCourses] = useState();
  const [oneCourse, setOneCourse] = useState();
  const [courseId, setCourseId] = useState();
  const [switchCoursePanel, setSwitchCoursePanel] = useState("questions");

  // QUESTIONS
  const [allQuestions, setAllQuestions] = useState();
  const [oneQuestion, setOneQuestion] = useState();

  // TEST
  const [test, setTest] = useState();
  const [testId, setTestId] = useState();
  const [oneTest, setOneTest] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);

  // Results
  const [resultsByCourse, setResultsByCourse] = useState();
  const [resultsByStudent, setResultsByStudent] = useState();
  const [userId, setUserId] = useState();

  // Students
  const [allStudents, setAllStudents] = useState();
  const [oneStudent, setOneStudent] = useState();
  const [switchStudentPanel, setSwitchStudentPanel] = useState("details");

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
      error(error.response.data.message);
      error(error.response.data.error);
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
      error(error.response.data.message);
      error(error.response.data.error);
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
      error(error.response.data.message);
      error(error.response.data.error);
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
      error(error.response.data.message);
      error(error.response.data.error);
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
      error(error.response.data.message);
      error(error.response.data.error);
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
    } catch (err) {
      if (activeUser.role === "user") {
        error(err.response.data.message);
        error(err.response.data.error);
      }
      console.log("🚀 ~ file: AppContext.jsx:166 ~ getOneTest ~ error:", err);
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
    } catch (err) {
      error(err.response.data.message);
      error(err.response.data.error);
      console.log(
        "🚀 ~ file: AppContext.jsx:189 ~ answerQuestion ~ error:",
        err
      );
    }
  };

  // RESULTS
  // Results by course
  const getResultsByCourse = async (id) => {
    try {
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/tests/by-course?courseId=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setResultsByCourse(response.data.data.allTests);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:245 ~ getResultsByCourse ~ error:",
        error
      );
      error(error.response.data.message);
      error(error.response.data.error);
    }
  };

  // Results by user
  const getResultsByStudent = async (id) => {
    try {
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/users/tests?id=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: AppContext.jsx:273 ~ getResultsByStudent ~ response:",
        response
      );
      setResultsByStudent(response.data.data.test);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:267 ~ getResultsByStudent ~ error:",
        error
      );
      error(error.response.data.message);
      error(error.response.data.error);
    }
  };

  // STUDENTS
  // Get students
  const getAllStudents = async () => {
    try {
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/users/students`,
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
      setAllStudents(response.data.data.allStudents);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:298 ~ getAllStudents ~ error:",
        error
      );
      error(error.response.data.message);
      error(error.response.data.error);
    }
  };

  // Get one student
  const getOneStudent = async (id) => {
    try {
      const response = await axios.get(
        `https://cbt-api-a37x.onrender.com/api/users/one?id=${id}`,
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
      setOneStudent(response.data.data.user);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.jsx:325 ~ getOneStudent ~ error:",
        error
      );
      error(error.response.data.message);
      error(error.response.data.error);
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

    // Students
    getAllStudents();
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
        sidebarActive,

        setLoading,
        setActiveUser,
        setTopbarTitle,
        setSidebarActive,

        // Courses
        courseId,
        oneCourse,
        allCourses,
        switchCoursePanel,

        setCourseId,
        setOneCourse,
        getOneCourse,
        getAllCourses,
        setSwitchCoursePanel,

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

        // Results
        userId,
        resultsByCourse,
        resultsByStudent,

        setUserId,
        getResultsByCourse,
        setResultsByCourse,
        getResultsByStudent,
        setResultsByStudent,

        // Students
        oneStudent,
        allStudents,
        switchStudentPanel,

        getOneStudent,
        setAllStudents,
        getAllStudents,
        setSwitchStudentPanel,

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
