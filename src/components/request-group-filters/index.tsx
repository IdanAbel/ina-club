"use client";
import {
  Box,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Filters } from "@/components/request-group-filters/filters";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

interface RequestGroupFiltersProps { }

export const RequestGroupFilters: React.FC<RequestGroupFiltersProps> = ({ }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // xs–sm breakpoint
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          width: 400,
          height: 500,
          // mx: "auto",
          // position: "relative",
          bgcolor: "white",
          boxShadow: 3,
          borderRadius: 2,
          py: { xs: 2, md: 3 },
          px: { xs: 5, md: 2 },
          flexDirection: { xs: "row-reverse", md: "column" },
        }}
      >
        {/* 🎛️ שורת פילטרים */}
        {isMobile ? (
          <>
            <IconButton onClick={() => setOpen(true)}>
              <FilterListIcon />
            </IconButton>

            <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
              <DialogTitle>מסננים</DialogTitle>
              <DialogContent>
                <Filters />
              </DialogContent>
              <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={() => setOpen(false)}>סגור</Button>
              </Box>
            </Dialog>
          </>
        ) : (
          <Box
            sx={{
              // display: "flex",
              // flexDirection: "column",
              gap: 2,
            }}
          >
            <Filters />
          </Box>
        )}
      </Box>
    </>
  );
};
