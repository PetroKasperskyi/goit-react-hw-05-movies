import React, { useState, useEffect} from "react";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => ('../pages/Home/Home'))