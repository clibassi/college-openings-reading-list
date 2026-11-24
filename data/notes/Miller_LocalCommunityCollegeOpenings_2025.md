# Miller (2025)

> Model-written summary (2026-11-24) of the paper's PDF: preliminary draft, "This version: June 24, 2025" (unpublished; no journal or working-paper series number appears in the text). Not checked against the paper by a person.

## File Name
Miller_LocalCommunityCollegeOpenings_2025.pdf

## Paper Title
Small Distances that Matter: Effects of Local Community College Openings on Enrollment and Degree Completion

## Basic Information
- Authors: Lois Miller
- Year: 2025
- Journal: Not published in this version (preliminary draft, June 24, 2025)
- Field: Economics of education
- Subfield: College access, geography of opportunity, community colleges
- Study type: Quasi-experimental (staggered difference-in-differences event study with distance rings, student-level administrative data)

## Objective and Contribution (100-150 words)
The paper asks how much the geographic proximity of a community college changes whether and where nearby students enroll, and whether they finish degrees. Miller (2025) uses five community college branch-campus openings in Texas between 1997 and 2012 (Table 1, p. 19). She compares high school graduates within 20 minutes driving time of a new campus with graduates 20–40 minutes away in the same commuting zone, before and after opening. The contribution has three parts. First, it offers plausibly causal evidence on college proximity, where earlier work was descriptive or used distance as an instrument (p. 4). Second, it studies two-year rather than four-year openings, where distance is more salient (p. 4). Third, linked student-level data let her separate extensive-margin entry from substitution across colleges. The paper does not study firms, industries or patents; every outcome is a student outcome.

## Methodology (200-300 words)
- **Data.** Education Research Center (University of Texas at Dallas) records on the universe of Texas public high school students, 1993 to 2020, matched to within-state public two-year and four-year enrollment and degrees. High school coordinates (NCES Common Core of Data) proxy for home address; college locations come from IPEDS plus state and association campus lists; driving times come from Open Route Service (p. 5).
- **Design.** A "ring method" generalized difference-in-differences. Treated students attend a high school within 20 minutes driving time of any opening college. Controls are 20–40 minutes away and in the same commuting zone. The five openings are pooled (p. 7); event time is trimmed to five years either side (p. 9).
- **Identifying assumption.** Generalized parallel trends (conditional on covariates) and no anticipation (pp. 9–10). High school fixed effects absorb fixed residential sorting. Sorting in response to the opening is argued unlikely because it would require changing high schools (p. 10).
- **Estimation.** The Borusyak, Jaravel, & Spiess (2024) imputation estimator, which avoids two-way fixed effects bias under staggered timing (p. 8):
$$Y_{it} = D_{it}\Gamma_{it}\theta + \phi_{s(i)} + \rho_{cz(i)t} + \beta_X X_{it} + \epsilon_{ist}$$
where $Y_{it}$ is the outcome, $D_{it}$ the treatment indicator, $\phi_{s(i)}$ high school fixed effects, $\rho_{cz(i)t}$ commuting-zone-by-year fixed effects, $X_{it}$ individual covariates (race, ethnicity, gender, economic disadvantage, standardized math and English language arts scores), and $\epsilon_{ist}$ the error (Eq. 1, p. 8). $\Gamma$ and $\theta$ are not defined beyond the treatment-effect parameterization. Untreated observations alone estimate the fixed effects (Eq. 2), giving $\hat{Y}_{it}(0)$ and $\hat{\tau}_{it}=Y_{it}-\hat{Y}_{it}(0)$ (Eqs. 3–4), averaged by years since opening (p. 9).
- **Inference.** Standard errors clustered at the high school; 95% confidence intervals (pp. 8, 22). Pre-trends use the robust Borusyak, Jaravel, & Spiess test on untreated observations only (p. 9).
- **Threats.** Colleges may be sited where local demand is growing; the paper relies on pre-trends and the narrow 20 versus 40 minute contrast (pp. 10–11). Spillover into the control ring is not formally examined.

## Sample and Setting (150-200 words)
The setting is Texas. The primary sample is graduates of Texas public high schools between 1996 and 2020 with valid tenth-grade standardized test scores, standardized within cohort (p. 5). The five openings are Tarrant County SE (1997), Alamo NW Vista (1999), Lone Star Cy-Fair (2003), Tarrant County Trinity River (2010) and Lone Star University Park (2012) (Table 1, p. 19). All were branch campuses of existing community college systems, in or near large metropolitan areas (Fort Worth, San Antonio, Houston), not satellite campuses with limited offerings (p. 6). Other openings, such as Austin Community College, were excluded because they lack separate enrollment records (footnote 2, p. 6). Figure 2 counts 163 non-opening two-year colleges, 38 private four-year and 37 public four-year institutions (p. 20). Treated students would save about 10 minutes driving time (one-way) by attending the new college instead of their next-closest option (p. 7). Enrollment is measured within one year of high school graduation (footnote 5, p. 13). The number of students and school-year observations is not reported in this version.

## Main Findings (200-300 words)
**First stage.** Students within 20 minutes are around six percentage points more likely to enroll in the new college in the opening year, 11 percentage points one year later, and about 12 percentage points in the following several years (Figure 4, top panel; p. 11).

**Extensive margin.** Enrollment in any college rises by around one percentage point, marginally significant, or 2 percent of the baseline mean. There is a small, marginally significant pre-trend in the two years before opening. The author concludes there is no meaningful extensive-margin effect (p. 11).

**Sector.** Treated students are around two to three percentage points more likely to enroll in any public two-year college, with a small increasing pre-trend. Public four-year enrollment falls around one percentage point, not statistically significant (Figure 5; p. 12).

**Proximity and substitution.** Treated students are around five to 10 percentage points more likely to enroll within 20 minutes of their high school and around 1 percentage point more likely to enroll within 60 minutes (Figure 6; p. 12). Conditional on any enrollment, the within-20-minute effect is around 16 percentage points (Figure A1; p. 12). They are around 8 percentage points less likely to attend an existing college within 60 minutes (Figure 7; p. 12). The introduction instead says around 10 percentage points less likely to attend an existing two-year college within 60 minutes (p. 3), a discrepancy within the draft.

**Degrees.** Treated cohorts after the opening are around 1 percentage point more likely to complete an associate's degree within four to six years, large relative to the roughly six percent baseline (Figure 8; p. 13). There is not much evidence of lower bachelor's completion (Figure 9; p. 14). The author calls the enrollment evidence "suggestive" (p. 14).

## Key Figures and Tables
**Table 1 — Timing of Opening Community Colleges in Texas.** Lists the five openings and years (1997 to 2012). This is the full source of treatment timing; with only five events, effects are identified from very few distinct treatment dates. (p. 19)

**Figure 1 — CDF of Student Travel Times to Enrolled Colleges.** Plots cumulative distributions of driving time from high school to the enrolled college, separately for two-year and four-year students. The text reads it as around half of two-year students but only around 10 percent of four-year students attending within 20 minutes. Axis values are garbled in the dump. (p. 19)

**Figure 2 — Location of Colleges in Texas.** Maps opening colleges, other two-year colleges and four-year institutions over county population quartiles. It shows that openings were in dense areas with existing options, which bounds external validity. (p. 20)

**Figure 3 — Enrollment in Opening Colleges by Distance from Opening College.** IMSE-optimal binscatters of enrollment in the new college by driving time, one panel per college. They motivate the 20-minute treated ring because enrollment dissipates quickly beyond that distance (pp. 7–8). Bin values are not legible in the dump. (p. 21)

**Figure 4 — Enrollment Effects of College Openings.** Event studies for enrollment in the opening college (first stage) and in any college. They show the roughly 12 percentage point first stage and the roughly 1 percentage point extensive-margin effect with a small pre-trend. Coefficients are not legible in the dump. (p. 22)

**Figure 5 — Enrollment Effects of College Openings, by Sector.** Event studies for public two-year and public four-year enrollment. Two-year enrollment rises by around two to three percentage points; four-year falls by around one percentage point without significance. (p. 23)

**Figure 6 — Enrollment Effects of College Openings, by Proximity.** Event studies for enrollment in any college within 20 and within 60 minutes. They show students shifting toward nearby colleges. (p. 24)

**Figure 7 — Enrollment Effects of College Openings at Existing Local Colleges.** Event studies for enrollment at non-opening colleges within 60 minutes, two-year and four-year. This is the evidence that substitution comes mainly from other nearby two-year colleges. (p. 25)

**Figure 8 — Associate's Degree Attainment Effects of College Openings.** Event studies for associate's completion within four and six years, with period 0 redefined by outcome horizon. They show positive effects for cohorts graduating after the opening. (p. 26)

**Figure 9 — Bachelor's Degree Attainment Effects of College Openings.** Same exercise for bachelor's completion. It shows little evidence of decreases. (p. 27)

**Figure A1 — Enrollment Effects of College Openings, by Proximity, Conditional on Some College Enrollment.** Repeats Figure 6 conditional on enrolling somewhere; the within-20-minutes effect is about 16 percentage points. (p. 28)

## Critical Analysis (300-400 words)
The causal claim for the first stage and substitution is fairly credible. The ring contrast is tight (20 versus 40 minutes, same commuting zone), high school fixed effects remove fixed siting and sorting, and the imputation estimator handles staggered timing. The author is candid that the pre-trend evidence is imperfect: small, marginally significant pre-period increases appear for any-college and two-year enrollment (pp. 11–12). The dump does not show the plots, so I cannot judge how small "quantitatively small" is against post-period effects of only about 1 to 3 percentage points.

The main inference concern is that treatment varies across only five openings, yet standard errors are clustered at the high school (p. 8). Shocks common to all schools around one campus are not absorbed by high-school clustering, so confidence intervals may be too narrow. This is my judgment; the draft does not discuss it. A second concern is spillovers. Figure 3 shows enrollment falling "quickly" past 20 minutes, not to zero, so the 20–40 minute controls may be partly treated, which would bias effects toward zero. Third, the degree outcomes are weaker causal claims: earlier cohorts are redefined as treated through transfer or delayed entry (p. 13), so the pre-period is not a clean placebo, and the associate's result is a roughly 1 percentage point change off a roughly six percent base. The paper calls its enrollment findings "suggestive" and the draft is preliminary, with robustness to alternative treatment definitions listed as future work (p. 15).

External validity is narrow by the author's own account: dense metros with many existing colleges, and an average time saving of about 10 minutes (pp. 7, 14).

Transfer to a project on community or technical college openings and local firms, industry mix and innovation: the design transfers in structure (event study around openings, imputation estimator, geographic rings) but not in outcomes, since Miller measures students, not establishments or patents. Firm-side analysis would need geocoded establishment or inventor data, and the 20-minute student catchment may be too small for firm effects that operate through commuting zones, so the control ring could be contaminated. The weak first stage in dense metros (about 1 percentage point extensive-margin entry) suggests human-capital supply shocks, and so firm effects, would be small for similar openings; rural or "education desert" openings are where larger effects are more plausible (p. 15).

## Research Gaps and Future Directions
- Robustness to alternative treatment definitions, heterogeneity by student characteristics such as race-ethnicity, and more outcomes such as college quality and major choice (stated by the author, p. 15).
- Openings in rural areas or "education deserts" 30 minutes or more from the nearest community college, which this sample does not cover (p. 15).
- Not addressed in this version: labor-market, firm, industry or innovation outcomes, and formal tests for spillover into the control ring.

## Implications and Future Research (100-150 words)
For education policy, the results suggest that a nearby new community college mostly redistributes students among existing colleges, while still raising associate's completion by about 1 percentage point without lowering bachelor's completion (pp. 13–14). Openings, closings and mergers in dense metros may therefore matter more for persistence than for access. For future research on local economic effects, the paper provides a template for staggered openings with distance rings and a clear decomposition into first stage, extensive margin and substitution, plus a reminder that the first stage must be established before attributing downstream effects to an opening. Firm and innovation studies should check whether new campuses actually add students and graduates locally, or only reshuffle them, before expecting local economic changes. Extensions to rural settings are the natural next step (p. 15).

## Keywords/Tags
#community-colleges #college-proximity #event-study #difference-in-differences #imputation-estimator #college-openings #texas #education-deserts #jel-i23

## Related Papers
[[Bleemer & Quincy (2026)]] Studies junior colleges and local development; the closest corpus paper on two-year college effects, with an outcome focus (local development) that Miller's student-only draft leaves open.
[[Andrews (2023)]] Uses college establishment to study local invention; the same openings-based logic as Miller, applied to innovation rather than enrollment.
[[Howard, Weinstein, & Yang (2024)]] Studies institution openings and local resilience; Miller notes related work on openings has focused on four-year colleges (p. 4).
[[Lee (2018)]] A synthetic control study of the UC Merced opening, a contrast to Miller's pooled ring difference-in-differences for a single versus multiple openings.
