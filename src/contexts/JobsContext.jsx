import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react"

const JobsContext = createContext();

const initialState = {
    jobs: [],
    isLoading: false,
    currentJob: {},
    jobFilters: {},
    error: "",
}

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return { ...state, isLoading: true };
        case "jobs/loaded":
            return { ...state, isLoading: false, jobs: action.payload };
        case "job/loaded":
            return { ...state, isLoading: false, currentJob: action.payload };
        case "setFilters":
            return { ...state, isLoading: false, jobFilters: action.payload };
        case "filterJobs":
            return { ...state, isLoading: false, jobs: action.payload ? action.payload : jobs };
        case "rejected":
            return { ...state, isLoading: false, error: action.payload };
        default:
            throw new Error("Unknown action type!");
    }
}

const BASE_URL = "http://localhost:9001";
export function JobsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { jobs, isLoading, currentJob, error, jobFilters } = state;

    const mapFilterKeyToJobTagKey = (filterKey) => {
        const keyMap = {
            "work Type": "workType",
            "employment Type": "empType",
            "salary Range": "ctc",
        }

        return keyMap[filterKey] || filterKey;
    }

    async function fetchJobs() {
        dispatch({ type: "loading" });
        try {
            const resp = await fetch(`${BASE_URL}/jobs`);
            const data = await resp.json();
            dispatch({ type: "jobs/loaded", payload: data });
        } catch (error) {
            dispatch({ type: 'rejected', payload: 'There was an error while loading the jobs!' });
        }
    }

    async function getJob(id) {
        if (Number(id) === currentJob.id) return;
        dispatch({ type: 'loading' });
        try {
            const resp = await fetch(`${BASE_URL}/jobs/${id}`);
            const data = await resp.json();
            dispatch({ type: 'job/loaded', payload: data });
        } catch (error) {
            dispatch({ type: 'rejected', payload: 'There was an error while loading the jobs!' });
        }
    }

    function setJobFilters(selectedFilters) {
        dispatch({ type: 'setFilters', payload: selectedFilters });
    }

    const filterJobs = (jobs, selectedFilters) => {
        if (!jobs || jobs.length === 0) return [];
        if (!selectedFilters || Object.keys(selectedFilters).length === 0) return jobs; 

        return jobs.filter(job => {
            let includeJob = true;
            for (const filterKey in selectedFilters) {
                const filters = selectedFilters[filterKey];
                const jobTagKey = mapFilterKeyToJobTagKey(filterKey);
                if (!filters.includes(job.jobTags[jobTagKey])) {
                    includeJob = false; 
                    break; 
                }
            }
            return includeJob; 
        });
    };

    useEffect(() => {
        dispatch({ type: 'loading' })
        const filteredJobs = filterJobs(jobs, jobFilters);
        dispatch({ type: 'filterJobs', payload: filteredJobs });
        if (Object.keys(jobFilters).length === 0) {
            fetchJobs();
        }
    }, [jobFilters])

    return <JobsContext.Provider value={{ jobs, isLoading, currentJob, error, getJob, fetchJobs, setJobFilters }}>{children}</JobsContext.Provider>
}

export function useJobs() {
    return useContext(JobsContext);
}